interface Position
{
    getDescription(): string;
}


// 1– Goalkeeper
// 2– Right Fullback
// 3– Left Fullback
// 4– Center Back
// 5– Center Back (or Sweeper, if used)
// 6– Defending/Holding Midfielder
// 7– Right Midfielder/Winger
// 8– Central/Box-to-Box Midfielder
// 9– Striker
// 10– Attacking Midfielder/Playmaker
// 11– Left Midfielder/Wingers


class Goalkeeper implements Position
{
    getDescription()
    {
        console.log('I am a goalkeeper!');
        return 'I am a goalkeeper!';
        
    }
}

class Centre implements Position
{
    getDescription()
    {
        console.log('I am a centre!');
        return 'I am a centre';
    }
}


interface Player
{
    getDescription(): string;
}

class CentreForward implements Position
{
    getDescription()
    {
        console.log('I wear number 4 or 5!');
        return 'I wear number 4 or 5!';
    }
}

class GoalkeeperPlayer implements Position
{
    getDescription()
    {
        console.log('I wear number 1!');
        return 'I wear number 1!';
    }
}


interface FootballTeam
{
    position(): Position;
    players(): Player;
}

class FirstLineUp implements FootballTeam
{
    position(): Position
    {
        return new Centre();
    }

    players(): Player
    {
        return new CentreForward();
    }
}

class Milan implements FootballTeam
{
    position(): Position
    {
        return new Goalkeeper();
    }

    players(): Player
    {
        return new GoalkeeperPlayer();
    }
}

//

const chelsea = new FirstLineUp();

let players = chelsea.players();
let position = chelsea.position();

players.getDescription();




export {};