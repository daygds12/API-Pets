const DogsDao = require('../dao/dogs-dao')
module.exports = (app, bd) =>{

    const DaoDogs = new DogsDao(bd)
    //rota
    app.get('/pets/dogs', async (req, res) =>{
      //tratamento de erro
       try{
           
        const respostaVerDogs = await DaoDogs.VerDogs()
        res.send(respostaVerDogs)

       }catch(error){
           res.send(error)
       }
    })
    app.get('/pets/dogs/:ID', async (req, res) =>{
        //tratamento de erro
         try{
        
          const id = req.params.ID
          const respostaVerUmDog = await DaoDogs.VerUmDog(id)
          res.send(respostaVerUmDog)
  
         }catch(error){
             res.send(error)
         }
      })
       
      app.post('/pets/dogs/newDog', async(req, res) =>{
          try{
           const body = req.body
           const infos = [body.RACA, body.FOTO, body.IDADE, body.NOME, body.GENERO, body.RUA, body.CIDADE,
           body.ESTADO, body.TELEFONE]   

           const respostaNewDog = await DaoDogs.NewDog(infos)
           res.send(respostaNewDog)

          }catch(error){
              res.send(error)
          }
      })
      app.delete('/pets/dogs/delete/:ID', async(req, res) =>{
          try{
              const id = req.params.ID
              const respostaDeleteDog = await DaoDogs.DeleteDogs(id)
              res.send(respostaDeleteDog)

          }catch(error){
              res.send(error)
          }
      })

      app.put('/pets/dogs/edit/:ID', async (req, res)=>{
          try{
            
            id =  req.params.ID

            const body = req.body
           const infos = [body.RACA, body.FOTO, body.IDADE, body.NOME, body.GENERO, body.RUA, body.NUMERO,
           body.CIDADE, body.ESTADO, body.TELEFONE]  

           const respostaEditDog = await DaoDogs.EditDog(infos, id)
           
           res.send(respostaEditDog)

          }catch(error){
              res.send(error)
          }
      })
}