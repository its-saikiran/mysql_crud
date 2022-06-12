const { MYSQL } = require('./mysql.js')

// /// CONNECTING TO SERVER [STEP-1]
function con(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected')
    });
}
// con()



// /// CREATING A DATABASE  [STEP-2]
function createDatabase(){
    MYSQL.connect(function(err){MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected')
        const createDB='create database CRUD'
        MYSQL.query(createDB,function(err,res){
            if(err) throw err;
            console.log('created database')
        })
    });
        if(err) throw err;
        console.log('connected')
        const createDB='create database CRUD'
        MYSQL.query(createDB,function(err,res){
            if(err) throw err;
            console.log('created database')
        })
    });
}
// createDatabase()



// /// USE DATABASE     [STEP-3]
function useDatabase(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected');
        const open='use CRUD'
        MYSQL.query(open,function(err,res){
            if(err) throw err;
            console.log('database changed')
        })
    })
}
// useDatabase()



// /// USE DATABASE & CREATING A TABLE   [STEP-4]
function createTable(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected!')
        const open='use CRUD'
        MYSQL.query(open,function(err,res){
            if(err) throw err;
            console.log('database changed')
        })
        const createTB='create table persons(ID INT(20),NAME VARCHAR(50))'
        MYSQL.query(createTB,function(err,res){
            if(err) throw err;
            console.log('created table')
        })
    })
}
// createTable()




// /// USE DATABASE SHOW TABLES & DESC TABLE   [STEP-5]
function useTable(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected!')
        const openDB='use CRUD'
        MYSQL.query(openDB,function(err,res){
            if(err) throw err;
            console.log('database changed')
        })
        const showTB='show tables'
        MYSQL.query(showTB,function(err,res){
            if(err) throw err;
            console.log(res)
        })
        const desc='desc persons'
        MYSQL.query(desc,function(err,res){
            if(err) throw err;
            console.log('describing table format')
        })
    })
}
// useTable()




// /// USE DATABASE & INSERT DATA INTO PERSONS TABLE   [STEP-6]
function postData(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected!')
        const openDB='use CRUD'
        MYSQL.query(openDB,function(err,res){
            if(err) throw err;
            console.log('database changed')
        })
        const insert='insert into persons values(5,"newtt")'
        MYSQL.query(insert,function(err,res){
            if(err) throw err;
            console.log('inserted data')
        })
    })
}
// postData()




// /// USE DATABASE & SHOW DATA FROM PERSONS TABLE   [STEP-7]
function readData(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected!')
        const openDB='use CRUD'
        MYSQL.query(openDB,function(err,res){
            if(err) throw err;
            console.log('database changed')
        })
        const openTD='select *from persons'
        MYSQL.query(openTD,function(err,res){
            if(err) throw err;
            console.log(res)
        })
    })
}
// readData()



// /// USE DATABASE & UPDATE DATA FROM PERSONS TABLE   [STEP-8]
function updateData(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected!')
        const openDB='use CRUD'
        MYSQL.query(openDB,function(err,res){
            if(err) throw err;
            console.log('database changed')
        })
        const updateTB='update persons set name="tony" where id=5'
        MYSQL.query(updateTB,function(err,res){
            if(err) throw err;
            console.log('data updated')
        })
    })
}
// updateData()



// /// USE DATABASE & READ,ALTER CREATE & DELETE COLUMN   [STEP-9]
function queries(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected!')
        const openDB='use CRUD'
        MYSQL.query(openDB,function(err,res){
            if(err) throw err;
            console.log('database changed')
        });
    
        const openTB='select *from persons'
        MYSQL.query(openTB,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    
        const alterTB='alter table persons add state varchar(50)'
        MYSQL.query(alterTB,function(err,res){
            if(err) throw err;
            console.log('column created')
        });
    
        const openTB1='select *from persons'
        MYSQL.query(openTB1,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    
        const dropC='alter table persons drop state'
        MYSQL.query(dropC,function(err,res){
            if(err) throw err;
            console.log('column deleted')
        });
    
        const openTB2='select *from persons'
        MYSQL.query(openTB2,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    })    
}
// queries()



////////////       IIIIIII         //////////////
// /// USE DATABASE & CREATE TABLE & INSERT MULTIPLE DATA USING LOOP  [STEP-1]
function allQueries(){
    MYSQL.connect(function(err){
        if(err) throw err;
        console.log('connected!')
    
        const openDB='use CRUD'
        MYSQL.query(openDB,function(err,res){
            if(err) throw err;
            console.log('database changed')
        });
    
        const createTB='create table students(id int(20),name varchar(50),state varchar(50))'
        MYSQL.query(createTB,function(err,res){
            if(err) throw err;
            console.log('table created')
        })
    
        const descTB='desc table students'
        MYSQL.query(descTB,function(err,res){
            if(err) throw err;
            console.log(res)
        })
    
        const ids=[1,2,3,4,5]
        const names=["saikiran",'nasir','shubham','pawan','akshit']
        const states=['TS','H','MH','H','UK']
        for(let i=0;i<ids.length;i++){
            var insertD=`insert into students values(${ids[i]},'${names[i]}','${states[i]}')`
            MYSQL.query(insertD,function(err,res){
                if(err) throw err;
                console.log(`inserted data ${i+1}`)
            });
        };
    
        const openTB='select *from students';
        MYSQL.query(openTB,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    
    })    
}
// allQueries()



// /// USE DATABASE & READ,ALTER CREATE & DELETE COLUMN   [STEP-2]
function allCommands(){
    MYSQL.connect(function(err){

        if(err) throw err;
        console.log('connected!')
    
        const openDB='use CRUD'
        MYSQL.query(openDB,function(err,res){
            if(err) throw err;
            console.log('database changed')
        });
    
        const changeTN='alter table students rename friends'
        MYSQL.query(changeTN,function(err,res){
            if(err) throw err;
            console.log('table name changed')
        })
    
        const openTB='select *from friends';
        MYSQL.query(openTB,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    
        const openSTB='select state,id,name from friends';
        MYSQL.query(openSTB,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    
        const renameCN='alter table friends change state city varchar(50)';
        MYSQL.query(renameCN,function(err,res){
            if(err) throw err;
            console.log('column changed')
        });
    
        const openTB1='select *from friends';
        MYSQL.query(openTB1,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    
        const createC='alter table friends add education varchar(50)';
        MYSQL.query(createC,function(err,res){
            if(err) throw err;
            console.log('column created')
        });
    
        const openTB2='select *from friends';
        MYSQL.query(openTB2,function(err,res){
            if(err) throw err;
            console.log(res)
        });
        const dropC='alter table friends drop education';
        MYSQL.query(dropC,function(err,res){
            if(err) throw err;
            console.log('dropped column')
        });
    
        const openTB3='select *from friends';
        MYSQL.query(openTB3,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    
        const dropTB='drop table friends';
        MYSQL.query(dropTB,function(err,res){
            if(err) throw err;
            console.log('table deleted')
        });
    
    })    
}
// allCommands()



// /// ACCESSING DATA IN DIFFERENT FORMATS  [ALSO..]
function access(){
    MYSQL.connect(function(err){

        if(err) throw err;
        console.log('connected!')
    
        const openDB='use CRUD'
        MYSQL.query(openDB,function(err,res){
            if(err) throw err;
            console.log('database changed')
        });
    
        // const get='select *from persons'
        // const get='select *from persons limit 3' // [ACCESS UPTO 5,7..ETC] 
        // const get='select *from persons limit 3 offset 2' // [AFTER N NUMBER OF DATA]
        // const get='select *from persons order by id asc' // [ORDER BY ASC or DESC WITH ID,PH_NO,MARKS..ETC]
        // const get='select *from persons order by id desc limit 3' // [ACCESSING LAST THREE ELEMENTS]
        // const get='select *from persons where 1<id and ID<5'
        // const get='select *from persons where id between 2 and 5'
        // const get='select *from persons where name like "s%"' // [STARTING WITH THE LETTER-->S]
    
        MYSQL.query(get,function(err,res){
            if(err) throw err;
            console.log(res)
        });
    
    });    
}
// access()


// /// AND ALSO....
// /// TRUNCATE & FOREIGN KEYS [MERGING TWO TABLES]