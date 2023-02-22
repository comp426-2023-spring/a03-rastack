#!/usr/bin/env node
// Rock, paper, scissors, lizard, spock
import { rpsls } from "../lib/rpsls.js";
import minimist from 'minimist';

// Arguments
const args = minimist(process.argv.slice(2));


// Help txt
if (args.h || args.help) {
    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!');
    console.log('');
    console.log('  -h, --help        display this help message and exit');
    console.log('  -r, --rules       display the rules and exit');
    console.log('');
    console.log('Examples:');
    console.log('  node-rpsls        Return JSON with single player RPSLS result.');
    console.log('                    e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('                    e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0);
}

// Rules txt
if (args.r || args.rules) {
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:');
    console.log('');
    console.log('  - Scissors CUTS Paper');
    console.log('  - Paper COVERS Rock');
    console.log('  - Rock SMOOSHES Lizard');
    console.log('  - Lizard POISONS Spock');
    console.log('  - Spock SMASHES Scissors');
    console.log('  - Scissors DECAPITATES Lizard');
    console.log('  - Lizard EATS Paper');
    console.log('  - Paper DISPROVES Spock');
    console.log('  - Spock VAPORIZES Rock');
    console.log('  - Rock CRUSHES Scissors');
    process.exit(0);
}

// Play RPSLS
let shot = args._[0];
try {
    console.log(JSON.stringify(rpsls(shot)));
} catch (e) {
    // Out of range error: return help and rules txts
    // Help txt
    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!');
    console.log('');
    console.log('  -h, --help        display this help message and exit');
    console.log('  -r, --rules       display the rules and exit');
    console.log('');
    console.log('Examples:');
    console.log('  node-rpsls        Return JSON with single player RPSLS result.');
    console.log('                    e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('                    e.g {"player":"rock","opponent":"Spock","result":"lose"}');

    // Rules txt
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:');
    console.log('');
    console.log('  - Scissors CUTS Paper');
    console.log('  - Paper COVERS Rock');
    console.log('  - Rock SMOOSHES Lizard');
    console.log('  - Lizard POISONS Spock');
    console.log('  - Spock SMASHES Scissors');
    console.log('  - Scissors DECAPITATES Lizard');
    console.log('  - Lizard EATS Paper');
    console.log('  - Paper DISPROVES Spock');
    console.log('  - Spock VAPORIZES Rock');
    console.log('  - Rock CRUSHES Scissors');

}

