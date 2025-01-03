const express= require("express");
const cors= require("cors");
const app=express();
const models = require('./models')
const port=8080;

app.use(express.json());//json형식의 데이터 처리할수 있도록 설정하는 코드
app.use(cors()) //브라우저 이슈 막기위한것

app.get('/products', (req, res)=>{
  res.send({
    products: [
      {id: 1, name:"고양이 사료",  price: 50000, seller:"캣컵", imageUrl:"/img/cat01.jpg"},
      {id: 2, name:"강아지 사료",  price: 30000, seller:"캣컵", imageUrl:"/img/dog01.jpg"},
      {id: 3, name:"강아지 물그릇",  price: 40000, seller:"캣컵", imageUrl:"/img/dog02.jpg"},
      {id: 4, name:"고양이 집",  price: 60000, seller:"캣컵", imageUrl:"/img/cat02.jpg"}
    ]
  })
})
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  models.Product.findOne({
    where:{
      id:id,
    }
  }).then((result)=>{
    res.send({
      product:result
    })
  }).catch((err)=>{
    console.error(err)
    res.send("상품조회 에러 발생")
  })
});

app.post('/products', (req, res)=>{
  const body=req.body;
  const [name,description , seller, price] = body;
  models.Product.create({
    name
    ,description,
    price,
    seller
  })
  .than((result)=>{
     console.log('상품생성결과')
     res.send({result})
  }).catch((err)=>{
    console.error(err)
  })
  res.send({body})
})

//.sync()통해 db를 연결
app.listen(port, ()=>{
  console.log('펫샵 서버가 돌아가고 있습니다.')
  models.sequelize.sync()
  .then(()=>{
    console.log('DB연결 성공')
  })
  .catch((err)=>{
    console.error(err);
    console.log('DB연결 에러')
    process.exit();
  })
})