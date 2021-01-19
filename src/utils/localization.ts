export interface LocalizationItem {
  app: string
  buttonLogin: string
  loginHeader: string
  loginPlaceholder: string
  loginPasswordPlaceholder: string
  regisration: string
  buttonSave: string
  buttonCancel: string
  buttonCard: string
  buttonTable: string
  buttonAdd: string
  goodsHeader: string
  categoriesHeader: string
  drawerMenuHeader: string
  drawerNewCategory: string
  form: {
    category: { label: string; placeholder: string }
  }
}

export interface Localization {
  en: LocalizationItem
  ru: LocalizationItem
}

export const localization: Localization = {
  ru: {
    app: 'CRM',
    // login
    buttonLogin: 'Войти',
    loginHeader: 'Войдите в свой аккаунт',
    loginPlaceholder: 'Введите ваш логин...',
    loginPasswordPlaceholder: 'Введите ваш пароль...',
    // registration
    regisration: 'Регистрация',
    // buttons
    buttonSave: 'Сохранить',
    buttonCancel: 'Отмена',
    buttonCard: 'Карточки',
    buttonTable: 'Таблица',
    buttonAdd: 'Добавить',
    //goods
    goodsHeader: 'Ваши товары',
    categoriesHeader: 'Ваши категории',
    drawerMenuHeader: 'Меню',
    drawerNewCategory: 'Добавление новой категории',
    form: {
      category: {
        label: 'Наименование категории',
        placeholder: 'Введите наименование категории',
      },
    },
  },
  en: {
    app: 'CRM',
    // login
    buttonLogin: 'Sign in',
    loginHeader: 'Sign in to your account',
    loginPlaceholder: 'Type your login here...',
    loginPasswordPlaceholder: 'Type your password here...',
    // registration
    regisration: 'Sign up',
    // buttons
    buttonSave: 'Save',
    buttonCancel: 'Cancel',
    buttonCard: 'Cards',
    buttonTable: 'Table',
    buttonAdd: 'Add',
    //goods
    goodsHeader: 'Goods',
    categoriesHeader: 'Categories',
    drawerMenuHeader: 'Menu',
    drawerNewCategory: 'Additing new category',
    form: {
      category: {
        label: 'Наименование категории',
        placeholder: 'Type category name here...',
      },
    },
  },
}
