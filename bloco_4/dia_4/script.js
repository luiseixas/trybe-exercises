let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Seja muito bem-vinda(o), ' + info.personagem + '!');

  info.recorrente = 'Sim';
  console.log(info);

  for (const key in info) {
      console.log(info[key]);
  }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Não'
  };
  console.log(info2);

for (let key in info) {
    if (info[key] === info2[key]){
        console.log('Ambos recorrentes!')        
    } else {   
    console.log(info[key] + ' e ' + info2[key])
 }
}