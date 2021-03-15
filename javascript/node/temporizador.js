const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 3',function(){
    console.log('exutando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('cancelando tarefa 1')
},10000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule() 
regra.dayOfWeek = [new schedule.Range(1,5)] //range de dias segunda a sexta
regra.hour = 11
regra.second = 5


const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando tarefa 2', new Date().getSeconds)
})


//excuta de 5 em 5 minutos, a qualquer minuto,as 11 horas, qualquer dia do mes,
// qualquer mes, na quarte (3)