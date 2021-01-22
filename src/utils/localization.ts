export interface LocalizationItemForm {
  label: string;
  placeholder: string;
  add: string;
}
export interface LocalizationItem {
  app: string;
  buttonLogin: string;
  loginHeader: string;
  loginPlaceholder: string;
  loginPasswordPlaceholder: string;
  regisration: string;
  buttonSave: string;
  buttonCancel: string;
  buttonCard: string;
  buttonTable: string;
  buttonAdd: string;
  buttonAddSubCategories: string;
  goodsHeader: string;
  categoriesHeader: string;
  drawerMenuHeader: string;
  drawerNewCategory: string;
  form: {
    category: LocalizationItemForm;
    subCategory: LocalizationItemForm;
  };
}

export interface Localization {
  en: LocalizationItem;
  ru: LocalizationItem;
}

export const localization: Localization = {
  ru: {
    app: "CRM",
    // login
    buttonLogin: "Войти",
    loginHeader: "Войдите в свой аккаунт",
    loginPlaceholder: "Введите ваш логин...",
    loginPasswordPlaceholder: "Введите ваш пароль...",
    // registration
    regisration: "Регистрация",
    // buttons
    buttonSave: "Сохранить",
    buttonCancel: "Отмена",
    buttonCard: "Карточки",
    buttonTable: "Таблица",
    buttonAdd: "Добавить",
    buttonAddSubCategories: "Добавить подкатегории",
    //goods
    goodsHeader: "Ваши товары",
    categoriesHeader: "Ваши категории",
    drawerMenuHeader: "Меню",
    drawerNewCategory: "Добавление новой категории",
    form: {
      category: {
        label: "Наименование категории",
        placeholder: "Введите наименование категории...",
        add: "Сохранить категорию",
      },
      subCategory: {
        label: "Наименования подкатегорий",
        placeholder: "Введите наименование подкатегории...",
        add: "Добавить подкатегорию",
      },
    },
  },
  en: {
    app: "CRM",
    // login
    buttonLogin: "Sign in",
    loginHeader: "Sign in to your account",
    loginPlaceholder: "Type your login here...",
    loginPasswordPlaceholder: "Type your password here...",
    // registration
    regisration: "Sign up",
    // buttons
    buttonSave: "Save",
    buttonCancel: "Cancel",
    buttonCard: "Cards",
    buttonTable: "Table",
    buttonAdd: "Add",
    buttonAddSubCategories: "Add subcategories",
    //goods
    goodsHeader: "Goods",
    categoriesHeader: "Categories",
    drawerMenuHeader: "Menu",
    drawerNewCategory: "Additing new category",
    form: {
      category: {
        label: "Name of category",
        placeholder: "Type category name here...",
        add: "Add category",
      },
      subCategory: {
        label: "Name of subcategory",
        placeholder: "Type subcategory name here...",
        add: "Add subcategory",
      },
    },
  },
};
