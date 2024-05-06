import { DropdownListItem } from "./Types";

export const CONSTANTS: {[key: string]: string} = {
  POSTED: '⏳ Posted',
  DAYS_AGO: 'days ago',
  ESTIMATED_SALARY: 'Estimated Salary',
  ABOUT_COMPANY: 'About Company:',
  ABOUT_US: 'About us',
  VIEW_JOB: 'View job',
  SKILLS: 'Skills',
  MINIMUM_EXPERIENCE: 'Minimum Experience',
  YEARS: 'years',
  EASY_APPLY: '⚡ Easy Apply',
  UNLOCK_REFERRAL_ASKS: 'Unlock referral asks',
  NOT_SPECIFIED: 'Not specified',
  ROLES: 'Roles',
  NUMBER_OF_EMPLOYEES: 'Number of Employees',
  EXPERIENCE: 'Experience',
  MINIMUM_BASE_PAY_SALARY: 'Minimum Base Pay Salary',
  SEARCH_COMPANY_NAME: 'Search Company Name',
  PLACEHOLDER: 'placeholder',
  ENGINEERING: 'ENGINEERING',
  BACKEND: 'Backend',
  FRONTEND: 'Frontend',
  FULLSTACK: 'Fullstack',
  IOS: 'IOS',
  FLUTTER: 'Flutter',
  REACT_NATIVE: 'React Native',
  ANDROID: 'Android',
  TECH_LEAD: 'Tech Lead',
  DEV_OPS: 'Dev-Ops',
  DATA_ENGINEER: 'Data Engineer',
  DATA_SCIENCE: 'Data Science',
  COMPUTER_VISION: 'Computer-Vision',
  NLP: 'Nlp',
  DEEP_LEARNING: 'Deep-Learning',
  TEST_QA: 'Test / Qa',
  WEB3: 'Web3',
  SRE: 'Sre',
  DATA_INFRASTRUCTURE: 'Data-Infrastructure',
  DESIGN: 'Design',
  DESIGNER: 'Designer',
  DESIGN_MANAGER: 'Design Manager',
  GRAPHIC_DESIGNER: 'Graphic Designer',
  PRODUCT_DESIGNER: 'Product Designer',
  PRODUCT: 'Product',
  PRODUCT_MANAGER: 'Product Manager',
  OPERATIONS: 'Operations',
  OPERATIONS_MANAGER: 'Operations Manager',
  FOUNDER_OFFICE: `Founder’s Office/Chief of Staff`,
  SALES: `Sales`,
  SALES_DEVELOPMENT_REPRESENTATIVE: 'Sales Development Representative',
  ACCOUNT_EXECUTIVE: 'Account Executive',
  ACCOUNT_MANAGER: 'Account Manager',
  MARKETING: 'Marketing',
  DIGITAL_MARKETING_MANAGER: 'Digital Marketing Manager',
  GROWTH_HACKER: 'Growth Hacker',
  PRODUCT_MARKETING_MANAGER: 'Product Marketing Manager',
  OTHER_ENGINEERING: 'Other Engineering',
  HARDWARE: 'Hardware',
  MECHANICAL: 'Mechanical',
  SYSTEMS: 'Systems',
  BUSINESS_ANALYST: 'Business Analyst',
  DATA_ANALYST: 'Data Analyst',
  PROJECT_MANAGER: 'Project Manager',
  MANAGEMENT: 'Management',
  HR: 'HR',
  LEGAL: 'Legal',
  FINANCE: 'Finance',
  EMPLOYEE_COUNT_1: '1-10',
  EMPLOYEE_COUNT_2: '11-20',
  EMPLOYEE_COUNT_3: '21-50',
  EMPLOYEE_COUNT_4: '51-100',
  EMPLOYEE_COUNT_5: '101-200',
  EMPLOYEE_COUNT_6: '201-500',
  EMPLOYEE_COUNT_7: '500+',
  REMOTE: 'Remote',
  HYBRID: 'Hybrid',
  IN_OFFICE: 'In-office',
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  SALARY_1: '0L',
  SALARY_2: '10L',
  SALARY_3: '20L',
  SALARY_4: '30L',
  SALARY_5: '40L',
  SALARY_6: '50L',
  SALARY_7: '60L',
  SALARY_8: '70L',
};

export const CURRENCY_MAP: {[key: string]: string} = {
  'USD': '$',
  'INR': '₹',
};

export const ROLES_LIST: DropdownListItem[] = [
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.ENGINEERING,
    placeholder: true,
  },
  {
    value: CONSTANTS.BACKEND,
    label: CONSTANTS.BACKEND,
  },
  {
    value: CONSTANTS.FRONTEND,
    label: CONSTANTS.FRONTEND,
  },
  {
    value: CONSTANTS.FULLSTACK,
    label: CONSTANTS.FULLSTACK,
  },
  {
    value: CONSTANTS.IOS,
    label: CONSTANTS.IOS,
  },
  {
    value: CONSTANTS.FLUTTER,
    label: CONSTANTS.FLUTTER,
  },
  {
    value: CONSTANTS.REACT_NATIVE,
    label: CONSTANTS.REACT_NATIVE,
  },
  {
    value: CONSTANTS.ANDROID,
    label: CONSTANTS.ANDROID,
  },
  {
    value: CONSTANTS.TECH_LEAD,
    label: CONSTANTS.TECH_LEAD,
  },
  {
    value: CONSTANTS.DEV_OPS,
    label: CONSTANTS.DEV_OPS,
  },
  {
    value: CONSTANTS.DATA_ENGINEER,
    label: CONSTANTS.DATA_ENGINEER,
  },
  {
    value: CONSTANTS.DATA_SCIENCE,
    label: CONSTANTS.DATA_SCIENCE,
  },
  {
    value: CONSTANTS.COMPUTER_VISION,
    label: CONSTANTS.COMPUTER_VISION,
  },
  {
    value: CONSTANTS.NLP,
    label: CONSTANTS.NLP,
  },
  {
    value: CONSTANTS.DEEP_LEARNING,
    label: CONSTANTS.DEEP_LEARNING,
  },
  {
    value: CONSTANTS.TEST_QA,
    label: CONSTANTS.TEST_QA,
  },
  {
    value: CONSTANTS.WEB3,
    label: CONSTANTS.WEB3,
  },
  {
    value: CONSTANTS.SRE,
    label: CONSTANTS.SRE,
  },
  {
    value: CONSTANTS.DATA_INFRASTRUCTURE,
    label: CONSTANTS.DATA_INFRASTRUCTURE,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.DESIGN,
    placeholder: true,
  },
  {
    value: CONSTANTS.DESIGNER,
    label: CONSTANTS.DESIGNER,
  },
  {
    value: CONSTANTS.DESIGN_MANAGER,
    label: CONSTANTS.DESIGN_MANAGER,
  },
  {
    value: CONSTANTS.GRAPHIC_DESIGNER,
    label: CONSTANTS.GRAPHIC_DESIGNER,
  },
  {
    value: CONSTANTS.PRODUCT_DESIGNER,
    label: CONSTANTS.PRODUCT_DESIGNER,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.PRODUCT,
    placeholder: true,
  },
  {
    value: CONSTANTS.PRODUCT_MANAGER,
    label: CONSTANTS.PRODUCT_MANAGER,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.OPERATIONS,
    placeholder: true,
  },
  {
    value: CONSTANTS.OPERATIONS_MANAGER,
    label: CONSTANTS.OPERATIONS_MANAGER,
  },
  {
    value: CONSTANTS.FOUNDER_OFFICE,
    label: CONSTANTS.FOUNDER_OFFICE,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.SALES,
    placeholder: true,
  },
  {
    value: CONSTANTS.SALES_DEVELOPMENT_REPRESENTATIVE,
    label: CONSTANTS.SALES_DEVELOPMENT_REPRESENTATIVE,
  },
  {
    value: CONSTANTS.ACCOUNT_EXECUTIVE,
    label: CONSTANTS.ACCOUNT_EXECUTIVE,
  },
  {
    value: CONSTANTS.ACCOUNT_MANAGER,
    label: CONSTANTS.ACCOUNT_MANAGER,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.MARKETING,
    placeholder: true,
  },
  {
    value: CONSTANTS.DIGITAL_MARKETING_MANAGER,
    label: CONSTANTS.DIGITAL_MARKETING_MANAGER,
  },
  {
    value: CONSTANTS.GROWTH_HACKER,
    label: CONSTANTS.GROWTH_HACKER,
  },
  {
    value: CONSTANTS.MARKETING,
    label: CONSTANTS.MARKETING,
  },
  {
    value: CONSTANTS.PRODUCT_MARKETING_MANAGER,
    label: CONSTANTS.PRODUCT_MARKETING_MANAGER,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.OTHER_ENGINEERING,
    placeholder: true,
  },
  {
    value: CONSTANTS.HARDWARE,
    label: CONSTANTS.HARDWARE,
  },
  {
    value: CONSTANTS.MECHANICAL,
    label: CONSTANTS.MECHANICAL,
  },
  {
    value: CONSTANTS.SYSTEMS,
    label: CONSTANTS.SYSTEMS,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.BUSINESS_ANALYST,
    placeholder: true,
  },
  {
    value: CONSTANTS.BUSINESS_ANALYST,
    label: CONSTANTS.BUSINESS_ANALYST,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.DATA_ANALYST,
    placeholder: true,
  },
  {
    value: CONSTANTS.DATA_ANALYST,
    label: CONSTANTS.DATA_ANALYST,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.PROJECT_MANAGER,
    placeholder: true,
  },
  {
    value: CONSTANTS.PROJECT_MANAGER,
    label: CONSTANTS.PROJECT_MANAGER,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.MANAGEMENT,
    placeholder: true,
  },
  {
    value: CONSTANTS.MANAGEMENT,
    label: CONSTANTS.MANAGEMENT,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.HR,
    placeholder: true,
  },
  {
    value: CONSTANTS.HR,
    label: CONSTANTS.HR,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.LEGAL,
    placeholder: true,
  },
  {
    value: CONSTANTS.LEGAL,
    label: CONSTANTS.LEGAL,
  },
  {
    value: CONSTANTS.PLACEHOLDER,
    label: CONSTANTS.FINANCE,
    placeholder: true,
  },
  {
    value: CONSTANTS.FINANCE,
    label: CONSTANTS.FINANCE,
  },
];

export const TOTAL_EMPLOYEE_LIST: DropdownListItem[] = [
  {
    value: CONSTANTS.EMPLOYEE_COUNT_1,
    label: CONSTANTS.EMPLOYEE_COUNT_1,
  },
  {
    value: CONSTANTS.EMPLOYEE_COUNT_2,
    label: CONSTANTS.EMPLOYEE_COUNT_2,
  },
  {
    value: CONSTANTS.EMPLOYEE_COUNT_3,
    label: CONSTANTS.EMPLOYEE_COUNT_3,
  },
  {
    value: CONSTANTS.EMPLOYEE_COUNT_4,
    label: CONSTANTS.EMPLOYEE_COUNT_4,
  },
  {
    value: CONSTANTS.EMPLOYEE_COUNT_5,
    label: CONSTANTS.EMPLOYEE_COUNT_5,
  },
  {
    value: CONSTANTS.EMPLOYEE_COUNT_6,
    label: CONSTANTS.EMPLOYEE_COUNT_6,
  },
  {
    value: CONSTANTS.EMPLOYEE_COUNT_7,
    label: CONSTANTS.EMPLOYEE_COUNT_7,
  },
];

export const YEARS_EXPERIENCE_LIST: DropdownListItem[] = [
  {
    value: CONSTANTS.ONE,
    label: CONSTANTS.ONE,
  },
  {
    value: CONSTANTS.TWO,
    label: CONSTANTS.TWO,
  },
  {
    value: CONSTANTS.THREE,
    label: CONSTANTS.THREE,
  },
  {
    value: CONSTANTS.FOUR,
    label: CONSTANTS.FOUR,
  },
  {
    value: CONSTANTS.FIVE,
    label: CONSTANTS.FIVE,
  },
  {
    value: CONSTANTS.SIX,
    label: CONSTANTS.SIX,
  },
  {
    value: CONSTANTS.SEVEN,
    label: CONSTANTS.SEVEN,
  },
  {
    value: CONSTANTS.EIGHT,
    label: CONSTANTS.EIGHT,
  },
  {
    value: CONSTANTS.NINE,
    label: CONSTANTS.NINE,
  },
  {
    value: CONSTANTS.TEN,
    label: CONSTANTS.TEN,
  },
];

export const LOCATION_TYPE_LIST: DropdownListItem[] = [
  {
    value: CONSTANTS.REMOTE,
    label: CONSTANTS.REMOTE,
  },
  {
    value: CONSTANTS.HYBRID,
    label: CONSTANTS.HYBRID,
  },
  {
    value: CONSTANTS.IN_OFFICE,
    label: CONSTANTS.IN_OFFICE,
  },
];

export const SALARY_LIST: DropdownListItem[] = [
  {
    value: CONSTANTS.SALARY_1,
    label: CONSTANTS.SALARY_1,
  },
  {
    value: CONSTANTS.SALARY_2,
    label: CONSTANTS.SALARY_2,
  },
  {
    value: CONSTANTS.SALARY_3,
    label: CONSTANTS.SALARY_3,
  },
  {
    value: CONSTANTS.SALARY_4,
    label: CONSTANTS.SALARY_4,
  },
  {
    value: CONSTANTS.SALARY_5,
    label: CONSTANTS.SALARY_5,
  },
  {
    value: CONSTANTS.SALARY_6,
    label: CONSTANTS.SALARY_6,
  },
  {
    value: CONSTANTS.SALARY_7,
    label: CONSTANTS.SALARY_7,
  },
  {
    value: CONSTANTS.SALARY_8,
    label: CONSTANTS.SALARY_8,
  },
];