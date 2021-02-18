function marketeGit() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err;
            if (!err) {
                console.log("markete gidildi")
                resolve();
            }
            else
                reject("error")
        }, 2000);
    });
};
function alisverisYap() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err;
            if (!err) {
                let fruit = 'armut ve elma '
                console.log('alisveris yapildi ' + fruit + 'alindi!!');
                resolve();
            }
            else
                reject("err")
        }, 1000);
    });

};
function eveDon() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err;
            if (!err) {
                console.log("eve donuldu")
                resolve();
            }
            else
                reject("error")
        }, 500);
    });
};
marketeGit()

    .then((data) => {
        
        
       alisverisYap()

        .then((data) => {
           
            eveDon();        
        })
        .catch((hata) => {
            console.log(hata);
        });    
    })
    .catch((hata) => {
        console.log(hata);
    });

