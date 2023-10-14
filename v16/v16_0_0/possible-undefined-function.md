## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|550,156|69|
|Using ? operator to avoid rejection|627,713|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:28:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using if to check function existence","hz":550156.0679889728,"cycles":3,"stats":{"deviation":3.149663213806137e-7,"mean":0.0000018176660373035162,"moe":7.431827901367578e-8,"rme":4.088665216187126,"sem":3.791748929269173e-8,"variance":9.920378360403604e-14}},{"name":"Using ? operator to avoid rejection","hz":627713.0094897202,"cycles":3,"stats":{"deviation":2.451719057917543e-7,"mean":0.000001593084713686146,"moe":5.586128406384255e-8,"rme":3.506485473367476,"sem":2.8500655134613547e-8,"variance":6.010926338956085e-14}}]}-->
