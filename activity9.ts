let TotalCalls = 0;

function LogCall(): void {
    TotalCalls++;

    const callNumber = TotalCalls;
    console.log(`Ini adalah call number ${callNumber}`);
}

LogCall();
LogCall();
LogCall();

console.log(`Total calls: ${TotalCalls}`)