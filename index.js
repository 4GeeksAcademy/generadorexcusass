function generadorexcusas() {
    let who = ['Mi perro ', 'Mi hermana', 'Tchuameni', 'Josico'];
    let action = ['se comio', 'beso', 'tiro', 'rompio'];
    let what = ['mi comida', 'mi copa', 'el coche'];
    let when = ['en el partido', 'en el tardeo', 'en la cama', 'durante la noche', 'en casa'];

    
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    
    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

   
    document.getElementById('excuse').innerHTML = excuse;
}

