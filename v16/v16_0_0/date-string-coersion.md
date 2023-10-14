## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|628,810|97|
|Using brackets {}|637,209|95|
|Using '' + |649,732|97|
|Using date.toString()|696,954|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:12:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":628809.8464400389,"cycles":5,"stats":{"deviation":3.315532074384739e-8,"mean":0.0000015903058860503332,"moe":6.598169043123954e-9,"rme":0.4148993662792192,"sem":3.366412777104058e-9,"variance":1.0992752936273973e-15}},{"name":"Using brackets {}","hz":637208.6045527043,"cycles":7,"stats":{"deviation":4.072858786559828e-8,"mean":0.000001569344784196631,"moe":8.190183294375977e-9,"rme":0.5218855268040186,"sem":4.178664946110193e-9,"variance":1.6588178695257595e-15}},{"name":"Using '' + ","hz":649731.5525956164,"cycles":5,"stats":{"deviation":1.3230438734461212e-8,"mean":0.0000015390971794506423,"moe":2.632961145485815e-9,"rme":0.17107179329804315,"sem":1.3433475232070485e-9,"variance":1.750445091063316e-16}},{"name":"Using date.toString()","hz":696953.91825545,"cycles":4,"stats":{"deviation":2.657117825836732e-8,"mean":0.0000014348150915100767,"moe":5.2878730137521515e-9,"rme":0.3685403816171817,"sem":2.6978943947715057e-9,"variance":7.060275140379322e-16}}]}-->
