export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export type BackendProficiency = {
   __typename?: 'BackendProficiency',
  allYears?: Maybe<Array<Maybe<YearProficiency>>>,
  year?: Maybe<YearProficiency>,
};


export type BackendProficiencyYearArgs = {
  year: Scalars['Int']
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Category = {
   __typename?: 'Category',
  happiness?: Maybe<CategoryHappiness>,
  otherTools?: Maybe<CategoryOtherTools>,
};


export type CategoryHappinessArgs = {
  filters?: Maybe<Filters>
};


export type CategoryOtherToolsArgs = {
  filters?: Maybe<Filters>
};

export type CategoryHappiness = {
   __typename?: 'CategoryHappiness',
  id: CategoryId,
  allYears?: Maybe<Array<Maybe<YearHappiness>>>,
  year?: Maybe<YearHappiness>,
};


export type CategoryHappinessYearArgs = {
  year: Scalars['Int']
};

export enum CategoryId {
  JavascriptFlavors = 'javascript_flavors',
  FrontEndFrameworks = 'front_end_frameworks',
  DataLayer = 'data_layer',
  BackEndFrameworks = 'back_end_frameworks',
  Testing = 'testing',
  MobileDesktop = 'mobile_desktop'
}

export type CategoryOtherTools = {
   __typename?: 'CategoryOtherTools',
  id: CategoryId,
  allYears?: Maybe<Array<Maybe<YearOtherTools>>>,
  year?: Maybe<YearOtherTools>,
};


export type CategoryOtherToolsYearArgs = {
  year: Scalars['Int']
};

export type CompanySize = {
   __typename?: 'CompanySize',
  allYears?: Maybe<Array<Maybe<YearCompanySize>>>,
  year?: Maybe<YearCompanySize>,
};


export type CompanySizeYearArgs = {
  year: Scalars['Int']
};

export type CompanySizeBucket = {
   __typename?: 'CompanySizeBucket',
  id?: Maybe<CompanySizeRange>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type CompanySizeFilter = {
  eq?: Maybe<CompanySizeRange>,
  in?: Maybe<Array<Maybe<CompanySizeRange>>>,
  nin?: Maybe<Array<Maybe<CompanySizeRange>>>,
};

export type CompanySizeMatrixBucket = {
   __typename?: 'CompanySizeMatrixBucket',
  id?: Maybe<Scalars['String']>,
  entity?: Maybe<Entity>,
  total?: Maybe<Scalars['Int']>,
  average?: Maybe<Scalars['Float']>,
  ranges?: Maybe<Array<Maybe<CompanySizeMatrixRange>>>,
};

export type CompanySizeMatrixRange = {
   __typename?: 'CompanySizeMatrixRange',
  range?: Maybe<CompanySizeRange>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export enum CompanySizeRange {
  Range_1 = 'range_1',
  Range_1_5 = 'range_1_5',
  Range_5_10 = 'range_5_10',
  Range_10_20 = 'range_10_20',
  Range_20_50 = 'range_20_50',
  Range_50_100 = 'range_50_100',
  Range_100_1000 = 'range_100_1000',
  RangeMoreThan_1000 = 'range_more_than_1000'
}

export type Completion = {
   __typename?: 'Completion',
  total?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type Country = {
   __typename?: 'Country',
  allYears?: Maybe<Array<Maybe<YearCountry>>>,
  year?: Maybe<YearCountry>,
};


export type CountryYearArgs = {
  year: Scalars['Int']
};

export type CountryBucket = {
   __typename?: 'CountryBucket',
  id?: Maybe<Scalars['String']>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type CssProficiency = {
   __typename?: 'CSSProficiency',
  allYears?: Maybe<Array<Maybe<YearProficiency>>>,
  year?: Maybe<YearProficiency>,
};


export type CssProficiencyYearArgs = {
  year: Scalars['Int']
};

export type Demographics = {
   __typename?: 'Demographics',
  country?: Maybe<Country>,
  source?: Maybe<Source>,
  participation?: Maybe<Participation>,
  gender?: Maybe<Gender>,
  salary?: Maybe<Salary>,
  companySize?: Maybe<CompanySize>,
  workExperience?: Maybe<WorkExperience>,
  jobTitle?: Maybe<JobTitle>,
  cssProficiency?: Maybe<CssProficiency>,
  backendProficiency?: Maybe<BackendProficiency>,
};


export type DemographicsCountryArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsSourceArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsParticipationArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsGenderArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsSalaryArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsCompanySizeArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsWorkExperienceArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsJobTitleArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsCssProficiencyArgs = {
  filters?: Maybe<Filters>
};


export type DemographicsBackendProficiencyArgs = {
  filters?: Maybe<Filters>
};

export type Entity = {
   __typename?: 'Entity',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  homepage?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  github?: Maybe<GitHub>,
  npm?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type EntityBucket = {
   __typename?: 'EntityBucket',
  id?: Maybe<Scalars['String']>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
  entity?: Maybe<Entity>,
};

export enum ExperienceId {
  WouldUse = 'would_use',
  WouldNotUse = 'would_not_use',
  Interested = 'interested',
  NotInterested = 'not_interested',
  NeverHeard = 'never_heard'
}

export type Feature = {
   __typename?: 'Feature',
  id: FeatureId,
  name?: Maybe<Scalars['String']>,
  mdn?: Maybe<Mdn>,
  experience?: Maybe<FeatureExperience>,
};


export type FeatureExperienceArgs = {
  filters?: Maybe<Filters>
};

export type FeatureBucket = {
   __typename?: 'FeatureBucket',
  id?: Maybe<Scalars['String']>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type FeatureExperience = {
   __typename?: 'FeatureExperience',
  allYears?: Maybe<Array<Maybe<YearFeature>>>,
  year?: Maybe<YearFeature>,
};


export type FeatureExperienceYearArgs = {
  year: Scalars['Int']
};

export enum FeatureId {
  Destructuring = 'destructuring',
  SpreadOperator = 'spread_operator',
  ArrowFunctions = 'arrow_functions',
  Proxies = 'proxies',
  AsyncAwait = 'async_await',
  Promises = 'promises',
  Decorators = 'decorators',
  Maps = 'maps',
  Sets = 'sets',
  TypedArrays = 'typed_arrays',
  ArrayPrototypeFlat = 'array_prototype_flat',
  Fetch = 'fetch',
  I18n = 'i18n',
  LocalStorage = 'local_storage',
  ServiceWorkers = 'service_workers',
  WebAnimations = 'web_animations',
  WebAudio = 'web_audio',
  WebComponents = 'web_components',
  Webgl = 'webgl',
  Webrtc = 'webrtc',
  Websocket = 'websocket',
  WebSpeech = 'web_speech',
  Webvr = 'webvr',
  Pwa = 'pwa',
  Wasm = 'wasm'
}

export type Filters = {
  gender?: Maybe<GenderFilter>,
  salary?: Maybe<SalaryRangeFilter>,
  companySize?: Maybe<CompanySizeFilter>,
  workExperience?: Maybe<WorkExperienceFilter>,
};

export type Gender = {
   __typename?: 'Gender',
  allYears?: Maybe<Array<Maybe<YearGender>>>,
  year?: Maybe<YearGender>,
};


export type GenderYearArgs = {
  year: Scalars['Int']
};

export type GenderBucket = {
   __typename?: 'GenderBucket',
  id?: Maybe<GenderId>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type GenderFilter = {
  eq?: Maybe<GenderId>,
  in?: Maybe<Array<Maybe<GenderId>>>,
  nin?: Maybe<Array<Maybe<GenderId>>>,
};

export enum GenderId {
  Male = 'male',
  Female = 'female',
  PreferNotToSay = 'prefer_not_to_say',
  NonBinary = 'non_binary'
}

export type GitHub = {
   __typename?: 'GitHub',
  name?: Maybe<Scalars['String']>,
  full_name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  stars?: Maybe<Scalars['Int']>,
  forks?: Maybe<Scalars['Int']>,
  opened_issues?: Maybe<Scalars['Int']>,
  homepage?: Maybe<Scalars['String']>,
};

export type HappinessBucket = {
   __typename?: 'HappinessBucket',
  id?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type JobTitle = {
   __typename?: 'JobTitle',
  allYears?: Maybe<Array<Maybe<YearJobTitle>>>,
  year?: Maybe<YearJobTitle>,
};


export type JobTitleYearArgs = {
  year: Scalars['Int']
};

export type JobTitleBucket = {
   __typename?: 'JobTitleBucket',
  id?: Maybe<JobTitleId>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export enum JobTitleId {
  FullStackDeveloper = 'full_stack_developer',
  FrontEndDeveloper = 'front_end_developer',
  WebDeveloper = 'web_developer',
  BackEndDeveloper = 'back_end_developer'
}

export type Matrices = {
   __typename?: 'Matrices',
  tools?: Maybe<ToolsMatrices>,
};


export type MatricesToolsArgs = {
  ids?: Maybe<Array<Maybe<ToolId>>>
};

export type Mdn = {
   __typename?: 'MDN',
  locale?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
};

export type Opinion = {
   __typename?: 'Opinion',
  id: OpinionId,
  allYears?: Maybe<Array<Maybe<YearOpinion>>>,
  year?: Maybe<YearOpinion>,
};


export type OpinionYearArgs = {
  year: Scalars['Int']
};

export type OpinionBucket = {
   __typename?: 'OpinionBucket',
  id?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export enum OpinionId {
  JsMovingInRightDirection = 'js_moving_in_right_direction',
  BuildingJsAppsOverlyComplex = 'building_js_apps_overly_complex',
  JsOverUsedOnline = 'js_over_used_online',
  EnjoyBuildingJsApps = 'enjoy_building_js_apps',
  WouldLikeJsToBeMainLang = 'would_like_js_to_be_main_lang',
  JsEcosystemChangingToFast = 'js_ecosystem_changing_to_fast'
}

export type OtherTools = {
   __typename?: 'OtherTools',
  id: OtherToolsId,
  year?: Maybe<YearOtherTools>,
  allYears?: Maybe<Array<Maybe<YearOtherTools>>>,
};


export type OtherToolsYearArgs = {
  year: Scalars['Int']
};

export enum OtherToolsId {
  Utilities = 'utilities',
  UtilitiesOthers = 'utilities_others',
  TextEditors = 'text_editors',
  TextEditorsOthers = 'text_editors_others',
  Browsers = 'browsers',
  BrowsersOthers = 'browsers_others',
  BuildTools = 'build_tools',
  BuildToolsOthers = 'build_tools_others',
  NonJsLanguages = 'non_js_languages',
  NonJsLanguagesOthers = 'non_js_languages_others'
}

export type Participation = {
   __typename?: 'Participation',
  allYears?: Maybe<Array<Maybe<YearParticipation>>>,
  year?: Maybe<YearParticipation>,
};


export type ParticipationYearArgs = {
  year: Scalars['Int']
};

export type ProficiencyBucket = {
   __typename?: 'ProficiencyBucket',
  id?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type Query = {
   __typename?: 'Query',
  survey?: Maybe<Survey>,
  entity?: Maybe<Entity>,
};


export type QuerySurveyArgs = {
  survey: SurveyType
};


export type QueryEntityArgs = {
  id: Scalars['ID']
};

export type Resources = {
   __typename?: 'Resources',
  id: ResourcesId,
  allYears?: Maybe<Array<Maybe<YearResources>>>,
  year?: Maybe<YearResources>,
};


export type ResourcesYearArgs = {
  year: Scalars['Int']
};

export enum ResourcesId {
  BlogsNewsMagazines = 'blogs_news_magazines',
  BlogsNewsMagazinesOthers = 'blogs_news_magazines_others',
  SitesCourses = 'sites_courses',
  SitesCoursesOthers = 'sites_courses_others',
  Podcasts = 'podcasts',
  PodcastsOthers = 'podcasts_others'
}

export type Salary = {
   __typename?: 'Salary',
  allYears?: Maybe<Array<Maybe<YearSalary>>>,
  year?: Maybe<YearSalary>,
};


export type SalaryYearArgs = {
  year: Scalars['Int']
};

export type SalaryBucket = {
   __typename?: 'SalaryBucket',
  id?: Maybe<SalaryRange>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type SalaryMatrixBucket = {
   __typename?: 'SalaryMatrixBucket',
  id?: Maybe<Scalars['String']>,
  entity?: Maybe<Entity>,
  total?: Maybe<Scalars['Int']>,
  average?: Maybe<Scalars['Float']>,
  ranges?: Maybe<Array<Maybe<SalaryMatrixRange>>>,
};

export type SalaryMatrixRange = {
   __typename?: 'SalaryMatrixRange',
  range?: Maybe<SalaryRange>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export enum SalaryRange {
  RangeWorkForFree = 'range_work_for_free',
  Range_0_10 = 'range_0_10',
  Range_10_30 = 'range_10_30',
  Range_30_50 = 'range_30_50',
  Range_50_100 = 'range_50_100',
  Range_100_200 = 'range_100_200',
  RangeMoreThan_200 = 'range_more_than_200'
}

export type SalaryRangeFilter = {
  eq?: Maybe<SalaryRange>,
  in?: Maybe<Array<Maybe<SalaryRange>>>,
  nin?: Maybe<Array<Maybe<SalaryRange>>>,
};

export type Source = {
   __typename?: 'Source',
  allYears?: Maybe<Array<Maybe<YearSource>>>,
  year?: Maybe<YearSource>,
};


export type SourceYearArgs = {
  year: Scalars['Int']
};

export type SourceBucket = {
   __typename?: 'SourceBucket',
  id?: Maybe<Scalars['String']>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
  entity?: Maybe<Entity>,
};

export type Survey = {
   __typename?: 'Survey',
  survey?: Maybe<SurveyType>,
  tool?: Maybe<Tool>,
  tools?: Maybe<Array<Maybe<Tool>>>,
  toolsRankings?: Maybe<ToolsRankings>,
  feature?: Maybe<Feature>,
  features?: Maybe<Array<Maybe<Feature>>>,
  demographics?: Maybe<Demographics>,
  opinion?: Maybe<Opinion>,
  otherTools?: Maybe<OtherTools>,
  resources?: Maybe<Resources>,
  category?: Maybe<Category>,
  matrices?: Maybe<Matrices>,
};


export type SurveyToolArgs = {
  id: ToolId
};


export type SurveyToolsArgs = {
  ids?: Maybe<Array<Maybe<ToolId>>>
};


export type SurveyToolsRankingsArgs = {
  ids: Array<Maybe<ToolId>>,
  filters?: Maybe<Filters>
};


export type SurveyFeatureArgs = {
  id: FeatureId
};


export type SurveyFeaturesArgs = {
  ids?: Maybe<Array<Maybe<FeatureId>>>
};


export type SurveyOpinionArgs = {
  id: OpinionId,
  filters?: Maybe<Filters>
};


export type SurveyOtherToolsArgs = {
  id: OtherToolsId,
  filters?: Maybe<Filters>
};


export type SurveyResourcesArgs = {
  id: ResourcesId,
  filters?: Maybe<Filters>
};


export type SurveyCategoryArgs = {
  id: CategoryId
};

export enum SurveyType {
  Js = 'js',
  Css = 'css'
}

export type Tool = {
   __typename?: 'Tool',
  id: ToolId,
  experience?: Maybe<ToolExperience>,
  experienceGraph?: Maybe<ToolExperienceGraph>,
  entity?: Maybe<Entity>,
};


export type ToolExperienceArgs = {
  filters?: Maybe<Filters>
};


export type ToolExperienceGraphArgs = {
  filters?: Maybe<Filters>
};

export type ToolAwarenessInterestSatisfaction = {
   __typename?: 'ToolAwarenessInterestSatisfaction',
  awareness?: Maybe<Scalars['Float']>,
  interest?: Maybe<Scalars['Float']>,
  satisfaction?: Maybe<Scalars['Float']>,
};

export type ToolExperience = {
   __typename?: 'ToolExperience',
  allYears?: Maybe<Array<Maybe<ToolYearExperience>>>,
  year?: Maybe<ToolYearExperience>,
};


export type ToolExperienceYearArgs = {
  year: Scalars['Int']
};

export type ToolExperienceBucket = {
   __typename?: 'ToolExperienceBucket',
  id?: Maybe<ExperienceId>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type ToolExperienceGraph = {
   __typename?: 'ToolExperienceGraph',
  nodes?: Maybe<Array<Maybe<ToolExperienceGraphNode>>>,
  links?: Maybe<Array<Maybe<ToolExperienceGraphLink>>>,
};

export type ToolExperienceGraphLink = {
   __typename?: 'ToolExperienceGraphLink',
  source?: Maybe<Scalars['String']>,
  target?: Maybe<Scalars['String']>,
  count?: Maybe<Scalars['Int']>,
};

export type ToolExperienceGraphNode = {
   __typename?: 'ToolExperienceGraphNode',
  id?: Maybe<Scalars['String']>,
  year?: Maybe<Scalars['Int']>,
  experience?: Maybe<ExperienceId>,
};

export type ToolExperienceRanking = {
   __typename?: 'ToolExperienceRanking',
  id?: Maybe<ToolId>,
  entity?: Maybe<Entity>,
  awareness?: Maybe<Array<Maybe<ToolExperienceRankingYearMetric>>>,
  interest?: Maybe<Array<Maybe<ToolExperienceRankingYearMetric>>>,
  satisfaction?: Maybe<Array<Maybe<ToolExperienceRankingYearMetric>>>,
};

export type ToolExperienceRankingYearMetric = {
   __typename?: 'ToolExperienceRankingYearMetric',
  year?: Maybe<Scalars['Int']>,
  rank?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export enum ToolId {
  Typescript = 'typescript',
  Reason = 'reason',
  Elm = 'elm',
  Clojurescript = 'clojurescript',
  Purescript = 'purescript',
  React = 'react',
  Vuejs = 'vuejs',
  Angular = 'angular',
  Preact = 'preact',
  Ember = 'ember',
  Svelte = 'svelte',
  Redux = 'redux',
  Apollo = 'apollo',
  Graphql = 'graphql',
  Relay = 'relay',
  Mobx = 'mobx',
  Express = 'express',
  Nextjs = 'nextjs',
  Koa = 'koa',
  Meteor = 'meteor',
  Sails = 'sails',
  Feathers = 'feathers',
  Nuxt = 'nuxt',
  Gatsby = 'gatsby',
  Jest = 'jest',
  Mocha = 'mocha',
  Storybook = 'storybook',
  Cypress = 'cypress',
  Enzyme = 'enzyme',
  Ava = 'ava',
  Jasmine = 'jasmine',
  Puppeteer = 'puppeteer',
  Electron = 'electron',
  Reactnative = 'reactnative',
  Nativeapps = 'nativeapps',
  Cordova = 'cordova',
  Ionic = 'ionic',
  Nwjs = 'nwjs',
  Expo = 'expo'
}

export type ToolsCompanySizeMatrix = {
   __typename?: 'ToolsCompanySizeMatrix',
  year?: Maybe<YearCompanySizeMatrix>,
  experience?: Maybe<ExperienceId>,
};


export type ToolsCompanySizeMatrixYearArgs = {
  year: Scalars['Int']
};

export type ToolsMatrices = {
   __typename?: 'ToolsMatrices',
  workExperience?: Maybe<ToolsWorkExperienceMatrix>,
  salary?: Maybe<ToolsSalaryMatrix>,
  companySize?: Maybe<ToolsCompanySizeMatrix>,
};


export type ToolsMatricesWorkExperienceArgs = {
  experience: ExperienceId,
  filters?: Maybe<Filters>
};


export type ToolsMatricesSalaryArgs = {
  experience: ExperienceId,
  filters?: Maybe<Filters>
};


export type ToolsMatricesCompanySizeArgs = {
  experience: ExperienceId,
  filters?: Maybe<Filters>
};

export type ToolsRankings = {
   __typename?: 'ToolsRankings',
  ids: Array<Maybe<ToolId>>,
  experience?: Maybe<Array<Maybe<ToolExperienceRanking>>>,
};


export type ToolsRankingsExperienceArgs = {
  filters?: Maybe<Filters>
};

export type ToolsSalaryMatrix = {
   __typename?: 'ToolsSalaryMatrix',
  year?: Maybe<YearSalaryMatrix>,
  experience?: Maybe<ExperienceId>,
};


export type ToolsSalaryMatrixYearArgs = {
  year: Scalars['Int']
};

export type ToolsWorkExperienceMatrix = {
   __typename?: 'ToolsWorkExperienceMatrix',
  year?: Maybe<YearWorkExperienceMatrix>,
  experience?: Maybe<ExperienceId>,
};


export type ToolsWorkExperienceMatrixYearArgs = {
  year: Scalars['Int']
};

export type ToolYearExperience = {
   __typename?: 'ToolYearExperience',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<ToolExperienceBucket>>>,
  awarenessInterestSatisfaction?: Maybe<ToolAwarenessInterestSatisfaction>,
};


export enum UsageId {
  UsedIt = 'used_it',
  KnowNotUsed = 'know_not_used',
  NeverHeardNotSure = 'never_heard_not_sure'
}

export type WorkExperience = {
   __typename?: 'WorkExperience',
  allYears?: Maybe<Array<Maybe<YearWorkExperience>>>,
  year?: Maybe<YearWorkExperience>,
};


export type WorkExperienceYearArgs = {
  year: Scalars['Int']
};

export type WorkExperienceBucket = {
   __typename?: 'WorkExperienceBucket',
  id?: Maybe<WorkExperienceRange>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export type WorkExperienceFilter = {
  eq?: Maybe<WorkExperienceRange>,
  in?: Maybe<Array<Maybe<WorkExperienceRange>>>,
  nin?: Maybe<Array<Maybe<WorkExperienceRange>>>,
};

export type WorkExperienceMatrixBucket = {
   __typename?: 'WorkExperienceMatrixBucket',
  id?: Maybe<Scalars['String']>,
  entity?: Maybe<Entity>,
  total?: Maybe<Scalars['Int']>,
  average?: Maybe<Scalars['Float']>,
  ranges?: Maybe<Array<Maybe<WorkExperienceMatrixRange>>>,
};

export type WorkExperienceMatrixRange = {
   __typename?: 'WorkExperienceMatrixRange',
  range?: Maybe<WorkExperienceRange>,
  count?: Maybe<Scalars['Int']>,
  percentage?: Maybe<Scalars['Float']>,
};

export enum WorkExperienceRange {
  RangeLessThan_1 = 'range_less_than_1',
  Range_1_2 = 'range_1_2',
  Range_2_5 = 'range_2_5',
  Range_5_10 = 'range_5_10',
  Range_10_20 = 'range_10_20',
  RangeMoreThan_20 = 'range_more_than_20'
}

export type YearCompanySize = {
   __typename?: 'YearCompanySize',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<CompanySizeBucket>>>,
};

export type YearCompanySizeMatrix = {
   __typename?: 'YearCompanySizeMatrix',
  year?: Maybe<Scalars['Int']>,
  buckets?: Maybe<Array<Maybe<CompanySizeMatrixBucket>>>,
};

export type YearCountry = {
   __typename?: 'YearCountry',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<CountryBucket>>>,
};

export type YearFeature = {
   __typename?: 'YearFeature',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<FeatureBucket>>>,
};

export type YearGender = {
   __typename?: 'YearGender',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<GenderBucket>>>,
};

export type YearHappiness = {
   __typename?: 'YearHappiness',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  mean?: Maybe<Scalars['Float']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<HappinessBucket>>>,
};

export type YearJobTitle = {
   __typename?: 'YearJobTitle',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<JobTitleBucket>>>,
};

export type YearOpinion = {
   __typename?: 'YearOpinion',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<OpinionBucket>>>,
};

export type YearOtherTools = {
   __typename?: 'YearOtherTools',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<EntityBucket>>>,
};

export type YearParticipation = {
   __typename?: 'YearParticipation',
  year?: Maybe<Scalars['Int']>,
  participants?: Maybe<Scalars['Int']>,
};

export type YearProficiency = {
   __typename?: 'YearProficiency',
  year?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<ProficiencyBucket>>>,
};

export type YearResources = {
   __typename?: 'YearResources',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<EntityBucket>>>,
};

export type YearSalary = {
   __typename?: 'YearSalary',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<SalaryBucket>>>,
};

export type YearSalaryMatrix = {
   __typename?: 'YearSalaryMatrix',
  year?: Maybe<Scalars['Int']>,
  buckets?: Maybe<Array<Maybe<SalaryMatrixBucket>>>,
};

export type YearSource = {
   __typename?: 'YearSource',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<SourceBucket>>>,
};

export type YearWorkExperience = {
   __typename?: 'YearWorkExperience',
  year?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['Int']>,
  completion?: Maybe<Completion>,
  buckets?: Maybe<Array<Maybe<WorkExperienceBucket>>>,
};

export type YearWorkExperienceMatrix = {
   __typename?: 'YearWorkExperienceMatrix',
  year?: Maybe<Scalars['Int']>,
  buckets?: Maybe<Array<Maybe<WorkExperienceMatrixBucket>>>,
};
