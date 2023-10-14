## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,987,893|82|
|Using replaceAll()|1,856,506|85|
|Using replaceAll(//g)|1,801,663|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:39:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using replace(//g)","hz":1987892.672297096,"cycles":4,"stats":{"deviation":4.837443234959797e-8,"mean":5.030452669481681e-7,"moe":1.0470442279246234e-8,"rme":2.0814115482623294,"sem":5.342062387370528e-9,"variance":2.340085705145831e-15}},{"name":"Using replaceAll()","hz":1856506.4331491957,"cycles":3,"stats":{"deviation":3.262773110456585e-8,"mean":5.386461270180992e-7,"moe":6.936389673175529e-9,"rme":1.2877452051080016,"sem":3.5389743230487392e-9,"variance":1.0645688370318537e-15}},{"name":"Using replaceAll(//g)","hz":1801663.2431259223,"cycles":4,"stats":{"deviation":3.708708648967954e-8,"mean":5.550426828184493e-7,"moe":7.884412278338954e-9,"rme":1.4205055795534003,"sem":4.02265932568314e-9,"variance":1.3754519842929705e-15}}]}-->
