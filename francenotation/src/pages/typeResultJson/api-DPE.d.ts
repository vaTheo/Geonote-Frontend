export interface DPEAllData {
  DPEHabitatExistant: ResultItemDPE[];
  DPEHabitatNeuf: ResultItemDPE[];
  DPETertiaire: ResultItemDPE[];
  DPEHabitatExistantAvant2021: ResultItemDPE[];
  DPETertiaireAvant2021: ResultItemDPE[];
}

// Define the type for the centroid and center (assuming it's an array of numbers)
type Point = number[];

// Define the type for bbox (assuming it's an array of arrays of numbers)
type BoundingBox = number[][];

// Define the type for the results (assuming it's an array of any, need more info to be specific)
type Results = ResultItemDPE[];

interface ResultItemDPE {
  Conso_chauffage_dépensier_é_finale: number;
  'Volume_stockage_générateur_ECS_n°1': number;
  Conso_é_finale_installation_ECS: number;
  'Nom__commune_(BAN)': string;
  Emission_GES_chauffage: number;
  'Conso_ECS_é_finale_énergie_n°1': number;
  Besoin_refroidissement: string;
  'Conso_chauffage_dépensier_installation_chauffage_n°1': number;
  Coût_total_5_usages: number;
  'Configuration_installation_chauffage_n°1': string;
  Conso_é_finale_dépensier_installation_ECS: number;
  Configuration_installation_ECS: string;
  'Type_installation_chauffage_n°1': string;
  'Surface_chauffée_installation_chauffage_n°1': number;
  'Coordonnée_cartographique_X_(BAN)': number;
  Nombre_niveau_logement: number;
  Apports_internes_saison_froid: number;
  'Type_installation_ECS_(général)': string;
  Déperditions_murs: number;
  'Conso_5_usages_par_m²_é_primaire': number;
  Coût_refroidissement: number;
  'Ubat_W/m²_K': number;
  'Usage_générateur_ECS_n°1': string;
  Coût_ECS_dépensier: number;
  Emission_GES_auxiliaires: number;
  'Emission_GES_5_usages_par_m²': number;
  Emission_GES_éclairage: number;
  Apports_solaires_saison_froid: number;
  Conso_ECS_dépensier_é_finale: number;
  'Adresse_(BAN)': string;
  Date_visite_diagnostiqueur: string;
  'N°_étage_appartement': number;
  'Type_énergie_générateur_ECS_n°1': string;
  Coût_ECS: number;
  Surface_habitable_desservie_par_installation_ECS: number;
  "Complément_d'adresse_logement": string;
  Coût_éclairage: number;
  Date_établissement_DPE: string;
  'Type_générateur_ECS_n°1': string;
  'Coût_total_5_usages_énergie_n°1': number;
  'Description_installation_chauffage_n°1': string;
  'N°_voie_(BAN)': string;
  Besoin_ECS: string;
  'N°DPE': string;
  Conso_refroidissement_é_finale: number;
  'Logement_traversant_(0/1)': boolean;
  Conso_chauffage_é_primaire: number;
  Adresse_brute: string;
  Conso_éclairage_é_primaire: number;
  Qualité_isolation_menuiseries: string;
  Qualité_isolation_murs: string;
  'Emission_GES_5_usages_énergie_n°1': number;
  'Type_émetteur_installation_chauffage_n°1': string;
  Statut_géocodage: string;
  Classe_inertie_bâtiment: string;
  'Emission_GES_ECS_énergie_n°1': number;
  Nombre_appartement: number;
  Modèle_DPE: string;
  'Description_générateur_chauffage_n°1_installation_n°1': string;
  'Description_générateur_ECS_n°1': string;
  'Production_électricité_PV_(kWhep/an)': number;
  Conso_5_usages_é_finale: number;
  Nombre_logements_desservis_par_installation_ECS: number;
  'N°_département_(BAN)': string;
  Conso_refroidissement_é_primaire: number;
  Méthode_application_DPE: string;
  'N°_région_(BAN)': string;
  Surface_habitable_logement: number;
  'Code_postal_(brut)': string;
  Deperditions_planchers_bas: number;
  'Coordonnée_cartographique_Y_(BAN)': number;
  _rand: number;
  Période_construction: string;
  Emission_GES_ECS_dépensier: number;
  'Emission_GES_chauffage_énergie_n°1': number;
  'Conso_é_finale_dépensier_générateur_ECS_n°1': number;
  Emission_GES_refroidissement: number;
  Classe_altitude: string;
  Indicateur_confort_été: string;
  Description_installation_ECS: string;
  Emission_GES_ECS: number;
  'Type_énergie_n°1': string;
  Date_réception_DPE: string;
  'Coût_ECS_énergie_n°1': number;
  Type_installation_ECS: string;
  Conso_ECS_é_finale: number;
  'Présence_brasseur_air_(0/1)': boolean;
  Qualité_isolation_plancher_haut_comble_perdu: string;
  Emission_GES_5_usages: number;
  'Code_postal_(BAN)': string;
  Conso_éclairage_é_finale: number;
  Coût_refroidissement_dépensier: number;
  Date_fin_validité_DPE: string;
  Deperditions_planchers_hauts: number;
  Emission_GES_refroidissement_dépensier: number;
  Type_bâtiment: string;
  Apports_solaires_saison_chauffe: number;
  'Conso_chauffage_générateur_n°1_installation_n°1': number;
  Coût_chauffage: number;
  Déperditions_renouvellement_air: number;
  'Protection_solaire_exterieure_(0/1)': boolean;
  Déperditions_portes: number;
  _geopoint: string;
  'Conso_chauffage_installation_chauffage_n°1': number;
  Conso_ECS_dépensier_é_primaire: number;
  Zone_climatique_: string;
  Conso_refroidissement_dépensier_é_finale: number;
  'Usage_générateur_n°1_installation_n°1': string;
  Version_DPE: number;
  Deperditions_baies_vitrées: number;
  'Conso_chauffage_dépensier_générateur_n°1_installation_n°1': number;
  'Type_énergie_générateur_n°1_installation_n°1': string;
  Déperditions_ponts_thermiques: number;
  Type_installation_chauffage: string;
  Type_énergie_principale_chauffage: string;
  'Inertie_lourde_(0/1)': boolean;
  Qualité_isolation_enveloppe: string;
  Emission_GES_chauffage_dépensier: number;
  Besoin_chauffage: number;
  'Isolation_toiture_(0/1)': boolean;
  Conso_ECS_é_primaire: number;
  Etiquette_GES: string;
  'Conso_5_usages_é_finale_énergie_n°1': number;
  Conso_auxiliaires_é_primaire: number;
  Conso_auxiliaires_é_finale: number;
  'Conso_é_finale_générateur_ECS_n°1': number;
  Conso_chauffage_é_finale: number;
  Coût_chauffage_dépensier: number;
  Etiquette_DPE: string;
  Conso_refroidissement_dépensier_é_primaire: number;
  Besoin_refroidissement_dépensier: number;
  'Nom__commune_(Brut)': string;
  'Type_générateur_n°1_installation_n°1': string;
  'Coût_chauffage_énergie_n°1': number;
  _i: number;
  Qualité_isolation_plancher_bas: string;
  Apports_internes_saison_chauffe_: number;
  'Conso_5_usages/m²_é_finale': number;
  'Hauteur_sous-plafond': number;
  Identifiant__BAN: string;
  Coût_auxiliaires: number;
  'Nom__rue_(BAN)': string;
  Conso_chauffage_dépensier_é_primaire: number;
  'Code_INSEE_(BAN)': string;
  Score_BAN: number;
  Deperditions_enveloppe: number;
  Type_énergie_principale_ECS: string;
  Conso_5_usages_é_primaire: number;
  'Conso_chauffage_é_finale_énergie_n°1': number;
  _score: null;
  _id: string;
  'date_etablissement_dpe':string;
  'annee_construction':number;
  'surface_thermique_lot':number;
  'classe_consommation_energie':string;
  'classe_estimation_ges':string;
}

// Define the type for each aggregation object
export interface Aggregation {
  total: number;
  value: string;
  centroid: Point;
  center: Point;
  bbox: BoundingBox;
  results: Results;
}

// Define the type for the overall response
export interface ApiResponse {
  total: number;
  aggs: Aggregation[];
}
