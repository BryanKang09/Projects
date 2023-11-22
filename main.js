 // 1. 2 boxes
 // 2. dropdown
 // 3. forex information
 // 4. dropdown item list
 // 5. amount input - calculation
 // 6. dropdown list - forex exchange
 // 7. reading number
 // 8. input at the bottom field

 let currencyRatio={
    USD:{
        KRW: 1293.44,
        USD: 1,
        NZD: 1.65,
        unit: "usd"
    },
    KRW:{
        KRW:1,
        USD: 0.00077,
        NZD: 0.0013,
        unit: "won"
    },
    NZD:{
        KRW:784.73,
        USD: 0.61,
        NZD: 1,
        unit: "nzd"
    }
 }

 //1. console.log(currencyRatio.KRW.unit);
 console.log(currencyRatio['NZD']["unit"]);