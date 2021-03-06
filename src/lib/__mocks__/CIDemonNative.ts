interface CIDemonNative {
  requestReview: () => void;
  sendNotification: (title: string, payload: string, url: string) => void;
  securelyStore: (key: string, value: string) => void;
  securelyRetrieve: (key: string) => string | null;
  applyAutoLauncher: (autoLauncherValue: boolean) => void;
  closeApp: () => void;
}

function createCIDemonNative(): CIDemonNative {
  return {
    requestReview: jest.fn(),
    sendNotification: jest.fn(),
    securelyStore: jest.fn(),
    securelyRetrieve: jest.fn(),
    applyAutoLauncher: jest.fn(),
    closeApp: jest.fn(),
  };
}

export const cidemonNative = createCIDemonNative();
