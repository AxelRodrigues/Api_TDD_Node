
## CRIAÇÃO DO SEQUELIZE INIT
npx sequelize-cli init

## CRIAÇÃO DE MIGRATIONS
npx sequelize-cli migration:create --name=create-marcas

## CRIAÇÃO DAS TABELAS APARTIR DAS MIGRATIONS
npx sequelize-cli db:migrate