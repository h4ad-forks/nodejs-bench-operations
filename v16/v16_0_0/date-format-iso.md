## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,593,000|91|
|fromUnixToISOString(new Date())|1,317,192|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Date().toISOString()","hz":1592999.7319091507,"cycles":6,"stats":{"deviation":1.9516921191784432e-8,"mean":6.277464961036355e-7,"moe":4.01002133878948e-9,"rme":0.6387962917641615,"sem":2.045929254484429e-9,"variance":3.809102128063243e-16}},{"name":"fromUnixToISOString(new Date())","hz":1317191.6522015643,"cycles":7,"stats":{"deviation":5.2060854463452104e-8,"mean":7.591909638423477e-7,"moe":1.052454759283032e-8,"rme":1.3862846232474166,"sem":5.369667139199143e-9,"variance":2.7103325674647406e-15}}]}-->
