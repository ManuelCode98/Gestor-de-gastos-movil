export default ({ config }) => {
  return {
    ...config,
    name: "Gestor de gastos",
    slug: "expense-calculator",
    version: "1.0.0",
    scheme: "expensecalculator",
    orientation: "portrait",
    icon: "./assets/logo.png",
    backgroundColor: "#000000",
    userInterfaceStyle: "light",
    newArchEnabled: true,

    splash: {
      image: "./assets/logo.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },

    ios: {
      supportsTablet: true,
    },

    android: {
      package: "com.manuelcode98.gestordegastos",
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#000000",
      },
      googleServicesFile: "./google-services.json",
      edgeToEdgeEnabled: true,
    },

    plugins: [
      [
        "react-native-google-mobile-ads",
        {
          androidAppId: "ca-app-pub-3940256099942544~3347511713", // TEST
          delayAppMeasurementInit: true,
        },
      ],
    ],

    extra: {
      eas: {
        projectId: "0bfd89a8-61fc-43f8-b06e-f5716001e91f",
      },
      admob: {
        androidAppId: "ca-app-pub-9692032625455220~6368125814",
        bannerAddTransaction: "ca-app-pub-9692032625455220/2484721122",
      },
    },

    web: {
      favicon: "./assets/logo.png",
    },
  };
};

