## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,304|93|
|{...smallObject} - Total keys: 2|54,127,379|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,322|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,639|98|
|{ ...bigObject, ...anotherBigObject }|792|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,205,274|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,703,745|93|
|{ ...smallObject, ...anotherSmallObject }|12,408,177|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:45:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","hz":1304.0250832583893,"cycles":2,"stats":{"deviation":0.000030079616152040587,"mean":0.000766856414679757,"moe":0.000006113457353357036,"rme":0.7972101734208021,"sem":0.0000031191108945699162,"variance":9.04783307854101e-10}},{"name":"{...smallObject} - Total keys: 2","hz":54127379.25841949,"cycles":6,"stats":{"deviation":7.499099833600283e-10,"mean":1.847493844521302e-8,"moe":1.5323969996034965e-10,"rme":0.8294463357200256,"sem":7.81835203879335e-11,"variance":5.623649831430379e-19}},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","hz":1321.9121641092179,"cycles":3,"stats":{"deviation":0.0000030252990454430646,"mean":0.0007564799138328974,"moe":6.020582536979108e-7,"rme":0.07958681290656217,"sem":3.071725784173014e-7,"variance":9.152434314358718e-12}},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","hz":3639.2230006792474,"cycles":3,"stats":{"deviation":0.0000014799602899972477,"mean":0.0002747839304745419,"moe":2.930171879442817e-7,"rme":0.1066354889961184,"sem":1.4949856527769477e-7,"variance":2.1902824599687377e-12}},{"name":"{ ...bigObject, ...anotherBigObject }","hz":792.314964980427,"cycles":2,"stats":{"deviation":0.000012207838928518636,"mean":0.0012621243371626883,"moe":0.0000024679191905887434,"rme":0.1955369307065844,"sem":0.0000012591424441779304,"variance":1.4903133130465501e-10}},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","hz":8205274.182921335,"cycles":5,"stats":{"deviation":4.4311704150884186e-9,"mean":1.2187283175514418e-7,"moe":9.104452359933197e-10,"rme":0.7470452789859707,"sem":4.645128755067958e-10,"variance":1.9635271247554865e-17}},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","hz":18703745.45682323,"cycles":5,"stats":{"deviation":8.468981628975151e-10,"mean":5.3465227181820664e-8,"moe":1.7212572711500974e-10,"rme":0.32193957865297584,"sem":8.78192485280662e-11,"variance":7.172364983191859e-19}},{"name":"{ ...smallObject, ...anotherSmallObject }","hz":12408177.0110249,"cycles":5,"stats":{"deviation":1.6615091645386562e-9,"mean":8.059201598361154e-8,"moe":3.35888307219138e-10,"rme":0.4167761571908577,"sem":1.7137158531588673e-10,"variance":2.7606127038459437e-18}}]}-->
