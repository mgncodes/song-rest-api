# song-rest-api
A REST API made using NodeJS, Express, Typescript and MongoDB (Prisma ORM).

## Installation Steps
### For nodejs initialization
1. Create `package.json` file using `npm init` command.
2. Install the dependencies using `npm install` command.

### For typescript initialization
1. Create `tsconfig.json` file using `tsc --init` command.
2. Add the required directory details in the `tsconfig.json` file.

### For Prisma initialization 
1. Command: `npx prisma init` ==> prisma folder is created.
2. Add the model details in the `schema.prisma` file.
3. Add the MongoDB atlas URL in the `.env` file.
4. After saving the file, execute command `npx prisma generate` to save the model.

### Running the API routes
1. Postman
