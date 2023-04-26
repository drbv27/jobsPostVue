<template>
    <div class="card-empleo header d-flex align-items-center justify-content-center mx-auto mt-3 " v-for="trabajo in trabajos">
        <div class="card-logo ">
            <img :src="trabajo.companyLogo" alt="logo-company" width="80" >
        </div>
        <div class="card-body p-1">
            <div class="d-flex align-items-center" >
                <div class="card-title">
                    {{trabajo.jobDescription}}
                </div>
                <div class="card-skill d-flex">
                    <div class="card-skill-target d-flex align-items-center" 
                        v-for="skill in trabajo.skills">
                            <i :class="skill.icon"></i>
                            <!-- <img v-show="skill.skillLogo" :src="skill.skillLogo" alt="logodev" >  -->
                            <span> {{ skill.skillName}}</span>
                </div>
                </div>
            </div>
            <div class="card-feacture d-flex justify-content-between align-items-center pt-1 fw-semibold">
                <div><i class="bi bi-building"></i> {{trabajo.company}}</div>
                <div><i class="bi bi-geo-alt"></i> {{trabajo.place}}</div>
                <div><i class="bi bi-cash"></i> $ {{trabajo.amount}} {{trabajo.coinBase}}</div>
                <div><i class="bi bi-people"></i> {{trabajo.freePlaces}} {{ trabajo.freePlaces > 1 ? "Vacantes": "Vacante"}}</div>
                <div><i class="bi bi-calendar3"></i> {{trabajo.days}} {{ trabajo.days > 1 ? "days ago": "day ago"}}</div>
            </div>
        </div>
      </div>
  </template>
    
  <script>
  export default {
    name: 'Jobs',
    data() {
      return {
        trabajos:[
    {  
    "id" : '1',
    "companyLogo":"https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/70785/Aventior_Inc.jpg",
    "jobDescription": "Desarrollador Full stack Sr.",
    "skills":[
        {
        "icon":"bx bxl-postgresql",
        "skillName":"sql"
        },
        {
        "icon":"bx bxl-javascript",
        "skillName":"Javascript Front End"
        },
        {
        "icon":"bx bxl-java",
        "skillName":"Java"
        },
    ],
    "company":"Aventior Inc",
    "place":"Remoto - Cualquier l...",
    "amount":"2.2K - 2.9K",
    "coinBase":"USD",
    "freePlaces":"1",
    "days":"1",
    },
    {  
    "id" : '2',
    "companyLogo":"https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/56672/ASP_Solutions_S.A.S._logo.jpeg",
    "jobDescription": "Desarrollador Angular",
    "skills":[
        {
        "icon":"bx bxl-angular",
        "skillName":"Angular"
        },
    ],
    "company":"ASP Solutions S.A.S.",
    "place":"Remoto en Colombia",
    "amount":"7M - 9M",
    "coinBase":"COP",
    "freePlaces":"1",
    "days":"2",
    },
    {  
    "id" : '3',
    "companyLogo":"https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/45901/domina.png",
    "jobDescription": "Desarrollador React Sr",
    "skills":[
        {
        "icon":"bx bxl-react",
        "skillName":"React"
        },
        {
        "icon":"bx bxl-postgresql",
        "skillName":"sql"
        },
      ],
    "company":"DOMINA",
    "place":"Remoto en Colombia",
    "amount":"8M - 8.3M",
    "coinBase":"COP",
    "freePlaces":"2",
    "days":"8",
    },
    {  
    "id" : '4',
    "companyLogo":"https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/40668/descarga.png",
    "jobDescription": "Desarrollador Fullstack",
    "skills":[
        {
        "icon":"bx bxl-nodejs",
        "skillName":"Node(Express)"
        },
        {
        "icon":"bx bxl-java",
        "skillName":"Java"
        },
        {
        "icon":"bx bxl-angular",
        "skillName":"Angular"
        },
      ],
    "company":"Fourier Analytics",
    "place":"Remoto en",
    "amount":"6M - 8M",
    "coinBase":"COP",
    "freePlaces":"9",
    "days":"2",
    },
    {  
    "id" : '5',
    "companyLogo":"https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/36310/1658495530532.jpg",
    "jobDescription": "Desarrollador backend",
    "skills":[
        {
        "icon":"bi bi-ubuntu",
        "skillName":"Linux"
        },
        {
        "icon":"bx bxl-python",
        "skillName":"Python"
        },
        {
        "skillName":"APIS"
        },
      ],
    "company":"TUS DATOS.CO",
    "place":"no disponible",
    "amount":"3.5M - 4.5M",
    "coinBase":"COP",
    "freePlaces":"1",
    "days":"9",
    },
    ],
        show: 1
      }
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
     @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Roboto+Slab&display=swap');

    .header {
      padding: 5px 100px 5px 5px;
      border: 1px solid rgba(0,0,0,.125);
      width: 800px;
      background-color: white;
    }
    
    .header:hover {
        box-shadow: -2px 10px 20px 0px rgba(0, 0, 0, 0.2);   
    }
    i{
        font-size: 1.2rem;
    }
    .card-empleo{
        border-radius: 5px;
        width: 100%;
    }
    .card-logo{
       text-align: left ;
        padding: 10px;
    }
    .card-title{
        font-family: 'Montserrat', 'Roboto Slab', sans-serif;
        font-size: 1.2rem;
        font-weight:bolder ;
        margin-right: 15px;
    }
    .card-skill-target{
        font-size: 0.7rem;
        padding: 1px;
        /* font-weight: bold; */
        border: 1px solid #666;
        border-radius: 10px;
        margin-right: 3px;
    }
    .card-skill-target img{
        width: 0.7rem;
        margin: 2px 3px;
    }
    .card-skill-target span{
        margin-right: 3px;
        margin-left: 3px;
    }

    .card-feacture{
        font-size: 0.8rem;
    }
  </style>