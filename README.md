
# Country Info App

The Country Info App is an application developed in Nest.js and Next.js with the purpose of searching for country information through third-party APIs.

### Folder Structure
The application is divided into two main parts, backend and frontend, following the structure below:

    ./backend
    ├── src
    ├    └── <countries>

    ./frontend
    ├── public
    ├── src
    ├    └── <app>
    ├    ├    └── <country>
    ├    ├    ├    └── <[code]>
    ├    └── <components>
    ├    ├   └── <CountryBorders>
    ├    ├   ├ └── <PopulationChart>
    ├    ├   ├ └── <ui>
    ├    └── <dtos>
    ├    └── <lib>
    ├    └── <utils>

## **Getting Started**
### **Requirements**
You need to have node installed on your machine in order to run the projects correctly.
1. **Clone the repository**
   ```bash
   git clone https://github.com/Jhonatas56/CountryInfoApp.git

2. **Install the backend dependencies**
    ```bash
    cd backend
    npm install

3. **Configure the backend environment variables:**
    ```bash
    PORT=333

4. **Run the backend**
    ```bash
    npm run start:dev
   
5. **Install the frontend dependencies**
    ```bash
    //if you are in the backend folder run:
    cd ..
    cd frontend 
    npm install --legacy-peer-deps

    //if not run
    cd frontend 
    npm install --legacy-peer-deps

6. **Configure the frontend environment variables:**
    ```bash
    //remember to name the file .env.local
    NEXT_PUBLIC_API_URL=http://localhost:3333

7. **Run the frontend**
    ```bash
    npm run dev

### **Backend Endpoints**
* **countries**:
   1. /countries/get-available-countries:
       - methods: GET
   2. /countries/get-country-info/:code
      - methods: GET
      - params: code - String
 
