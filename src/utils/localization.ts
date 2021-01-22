export interface LocalizationItemForm {
  label: string;
  placeholder: string;
  add: string;
  save: string;
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
  subcategories: string;
  goodsHeader: string;
  categoriesHeader: string;
  drawerMenuHeader: string;
  drawerNewCategory: string;
  drawerNewSubcategoriesHeader: string;
  emptySubcategories: string;
  form: {
    category: LocalizationItemForm;
    subCategory: LocalizationItemForm;
  };
}

export interface Localization {
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
    subcategories: "Подкатегории",
    emptySubcategories: "Подкатегории отсутствуют",
    drawerMenuHeader: "Меню",
    drawerNewCategory: "Добавление новой категории",
    drawerNewSubcategoriesHeader: "Добавление новых подкатегорий",
    form: {
      category: {
        label: "Наименование категории",
        placeholder: "Введите наименование категории...",
        add: "Добавить категорию",
        save: "Сохранить категорию",
      },
      subCategory: {
        label: "Наименования подкатегорий",
        placeholder: "Введите наименование подкатегории...",
        add: "Добавить подкатегорию",
        save: "Сохранить подкатегории",
      },
    },
  },
};
