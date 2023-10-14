## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,821,303|84|
|Using delete property (proto: null)|10,295,923|87|
|Using delete property (cached proto: null)|1,948,958|85|
|Using undefined assignment|620,025,554|88|
|Using undefined assignment (proto: null)|12,566,614|91|
|Using undefined property (cached proto: null)|621,883,053|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:14:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":1821303.4754210932,"cycles":7,"stats":{"deviation":3.266286636708839e-8,"mean":5.490573171880626e-7,"moe":6.9850693519324585e-9,"rme":1.272193108673195,"sem":3.563810893843091e-9,"variance":1.0668628393142742e-15}},{"name":"Using delete property (proto: null)","hz":10295922.583041426,"cycles":7,"stats":{"deviation":9.461110452060726e-9,"mean":9.712582742678306e-8,"moe":1.988101521391279e-9,"rme":2.0469339351471483,"sem":1.0143375109139178e-9,"variance":8.951261098609271e-17}},{"name":"Using delete property (cached proto: null)","hz":1948957.8570533579,"cycles":4,"stats":{"deviation":5.382424410559191e-8,"mean":5.130947272055982e-7,"moe":1.1442595557257777e-8,"rme":2.230113651640139,"sem":5.83805895778458e-9,"variance":2.897049253538346e-15}},{"name":"Using undefined assignment","hz":620025553.8208722,"cycles":7,"stats":{"deviation":8.623796008558054e-11,"mean":1.6128367513847727e-9,"moe":1.8018274969946463e-11,"rme":1.1171790917137814,"sem":9.192997433646154e-12,"variance":7.43698575972218e-21}},{"name":"Using undefined assignment (proto: null)","hz":12566613.539089017,"cycles":6,"stats":{"deviation":6.435247263292426e-9,"mean":7.95759332368625e-8,"moe":1.3222105368264718e-9,"rme":1.66157088336097,"sem":6.745972126665673e-10,"variance":4.1412407339712655e-17}},{"name":"Using undefined property (cached proto: null)","hz":621883052.9934826,"cycles":6,"stats":{"deviation":8.631713447262156e-11,"mean":1.6080193778981787e-9,"moe":1.803481740525994e-11,"rme":1.1215547308163052,"sem":9.201437451663236e-12,"variance":7.450647703564635e-21}}]}-->
