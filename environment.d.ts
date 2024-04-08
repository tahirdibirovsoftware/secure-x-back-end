declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATABASE_NAME: string;
        DATABASE_TYPE: string;
        DATABASE_USER: string;
        DATABASE_PASSWORD: string;
        DATABASE_PORT: string;
        SERVER_PORT: string;
        NODE_ENV: 'development' | 'production';
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}