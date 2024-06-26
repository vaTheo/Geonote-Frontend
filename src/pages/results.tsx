import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomSlider from "../components/cardRates/slider";
// import "../styles/results.scss";
import CardRates from "../components/cardRates/cardRates";
import { AddressObject } from "../apiResponseType/apiResponse";
import { FrontGroupDataValue } from "./typeResultJson/ResultRespons";
import { ServiceAPI } from "../services/api/api.service";
import {
  FrontCatastropheNaturelle,
  FrontDPEBatiment,
  FrontEau,
  FrontInstallationClassees,
  FrontParcNaturelle,
  FrontpollutionSol,
  FrontRisqueInformation,
  FrontrisqueLocaux,
  FrontzoneInnondable,
  FrontzoneNaturelle,
  JsonData,
} from "./typeResultJson/jsonInterface";
import {
  API_ENDPOINTS_JSON,
  API_ENDPOINTS_RATES,
} from "../utils/endpointConst";
import { TypeCards } from "../utils/enum";
import DrawerInfos from "../components/drawer/drawer";
import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const ResultPage = () => {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const addressObject: AddressObject = state?.addressObject || {};
  const [groupedNotation, setGroupedNotation] = useState<FrontGroupDataValue>();
  const [globalJson, setGlobalJson] = useState<JsonData>();
  const [isSliderOpen, setSliderOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState<TypeCards>(
    TypeCards.CatastropheNaturelle
  );

  // Trigger data fetching once when the component mounts.
  useEffect(() => {
    const fetchAllNotations = async () => {
      try {
        const promises = API_ENDPOINTS_RATES.map((endpoint) =>
          ServiceAPI.initialFetchData(addressObject, endpoint)
        );
        await Promise.all(promises);

        // Fetch grouped notation and update the state
        const groupedData = await ServiceAPI.fetchGroupNotation(addressObject);
        setGroupedNotation(groupedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching notations:", error);
        setIsLoading(false);
      }
    };
    fetchAllNotations();
  }, []);

  const fetchJson = async () => {
    const promises = API_ENDPOINTS_JSON.map((endpoint) =>
      ServiceAPI.fetchGroupJson(addressObject, endpoint)
    );
    const results = await Promise.all(promises);
    const newGlobalJson = {
      dataDPEBatiment: results[0] as FrontDPEBatiment,
      dataEau: results[1] as FrontEau,
      dataZoneInnondable: results[2] as FrontzoneInnondable,
      dataCatastropheNaturelle: results[3] as FrontCatastropheNaturelle,
      dataInstallationClassees: results[4] as FrontInstallationClassees,
      dataRisqueLocaux: results[5] as FrontrisqueLocaux,
      dataZoneNaturelle: results[6] as FrontzoneNaturelle,
      dataParcNaturelle: results[7] as FrontParcNaturelle,
      dataPollutionSol: results[8] as FrontpollutionSol,
      dataRisqueInformation: results[9] as FrontRisqueInformation,
    };
    setGlobalJson(newGlobalJson);
  };
  useEffect(() => {
    fetchJson();
  }, [groupedNotation]);

  const handleTitleClickInParent = (data: TypeCards) => {
    setSliderValue(data);
    setSliderOpen(true);
  };

  return (
    <Container maxWidth="lg">
      <Box my={6} sx={{ textAlign: "center" }}>
        {isLoading ? (
          <Typography variant="h1" component="h1" my={2}>
            Nous sommes en train de rechercher les données
          </Typography>
        ) : (
          <Typography variant="h1" component="h1" my={2}>
            Bonne nouvelle ! Il fait bon vivre
          </Typography>
        )}
        <Container maxWidth="md">
          <Typography variant="body1" component="p" my={2}>
            au
          </Typography>
          <Typography variant="h3" component="p" my={2}>
            {addressObject.properties.label}
          </Typography>
          <CustomSlider
            customValue={groupedNotation?.globalRate || 0}
          ></CustomSlider>
          <Typography variant="body1" component="p" my={2}>
            Les données suivantes sont calculées sur la base des résultats
            donnés par des sites spécialisés en open data.
          </Typography>
          <Typography variant="body1" component="p" my={2}>
            La barre d'indication permet de donner une indication de la qualité
            de vie de l'adresse recherchée. Plus la barre d'indication se trouve
            proche de 100, plus la qualité de vie est bonne selon les données
            que nous avons récupérées.
          </Typography>
        </Container>
      </Box>
      <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
        <CardRates
          titleCard="Qualité de l'eau potable"
          textCard="Indique la qualité de l'eau potable de l'adresse recherchée ainsi que les cours d'eau à proximité."
          valueCard={groupedNotation?.eau || 0}
          dataTypeJson={TypeCards.Eau}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Qualité des sols"
          textCard="Indique la présence de zones où les sols sont polué à proximité de l'addresse"
          valueCard={groupedNotation?.polutionSol || 0}
          dataTypeJson={TypeCards.PollutionSol}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Absence de catastrophes naturelles"
          textCard="Indique si des catastrophes naturelles se sont déroulées fréquemment ces 10 dernières années. Comme par exemple des inondations ou des sécheresse."
          valueCard={groupedNotation?.CatastropheNaturelle || 0}
          dataTypeJson={TypeCards.CatastropheNaturelle}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Classe énergétique du bâtiment"
          textCard="Indique la qualité du bâtiment selon les diagnostics de performance énergétique récupérés pour cette adresse depuis 10 ans."
          valueCard={groupedNotation?.DPEBatiment || 0}
          dataTypeJson={TypeCards.DPE}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Absence d'installations dangereuses"
          textCard="Donne une indication sur le nombre d'installations dangereuses trouvées autour de cette adresse dans un rayon de 5 km."
          valueCard={groupedNotation?.InstallationClassees || 0}
          dataTypeJson={TypeCards.InstallationClasse}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Parcs naturels"
          textCard="Indique la présence de parcs naturels à proximité de l'adresse dans un rayon de 5 km, ces zones ont des restrictions incitatives sur l'urbanisme."
          valueCard={groupedNotation?.parcNaturelle || 0}
          dataTypeJson={TypeCards.ParcNaturelle}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Absence de Risques classés"
          textCard="Indique les risques liés à l'adresse recensés par le ministère de la Transition écologique et de la Cohésion des territoires."
          valueCard={groupedNotation?.risqueGeneraux || 0}
          dataTypeJson={TypeCards.RisqueInforamtion}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Absence de dangers naturels"
          textCard="Indique les risques liés à l'environnement de l'adresse tels que la sismicité, les dangers liés au radon ou les mouvements de terrain."
          valueCard={groupedNotation?.risqueLocaux || 0}
          dataTypeJson={TypeCards.RisqueLocaux}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Zone protégée contre les inondations"
          textCard="Indique si l'adresse se trouve dans une zone inondable à risque plus ou moins élevé."
          valueCard={groupedNotation?.zoneInnondable || 0}
          dataTypeJson={TypeCards.ZoneInnondable}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
        <CardRates
          titleCard="Zone naturelle"
          textCard="Indique la présence de zones naturelles proches de l'adresse, ces zones sont classées comme étant des réserves naturelles pour les animaux et la végétation mais n'imposent que très peu de restrictions sur l'urbanisme."
          valueCard={groupedNotation?.zoneNaturelle || 0}
          dataTypeJson={TypeCards.ZoneNaturelle}
          onTitleClick={handleTitleClickInParent}
          loading={isLoading}
        ></CardRates>
      </Grid2>
      <DrawerInfos
        data={globalJson}
        type={sliderValue}
        isOpen={isSliderOpen}
        toggleDrawer={(open) => () => setSliderOpen(open)}
      />
    </Container>
  );
};

export default ResultPage;
