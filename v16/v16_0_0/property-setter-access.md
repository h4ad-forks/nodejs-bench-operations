## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|656,848,058|88|
|Setter|6,499,603|94|
|Method|358,215,723|97|
|DefineProperty (setter)|657,328,654|89|
|DefineProperty (setter & enumerable=false)|6,672,505|94|
|DefineProperty (setter & configurable=false)|6,696,642|99|
|DefineProperty (setter & enumerable=false & configurable=false)|6,628,603|99|
|DefineProperty (writable)|592,989,220|85|
|DefineProperty (writable & enumerable=false)|77,126,653|79|
|DefineProperty (writable & enumerable=false & configurable=false)|78,175,849|79|
|DefineProperties (setter)|57,450,492|83|
|DefineProperties (setter & enumerable=false)|6,611,841|98|
|DefineProperties (setter & enumerable=false & configurable=false)|6,666,246|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:37:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Setter (class)","hz":656848057.8349127,"cycles":7,"stats":{"deviation":1.2356865113314922e-10,"mean":1.5224221006242704e-9,"moe":2.5818026441870247e-11,"rme":1.695852052547289,"sem":1.3172462470341962e-11,"variance":1.5269211542865937e-20}},{"name":"Setter","hz":6499602.895772967,"cycles":6,"stats":{"deviation":9.96582339054604e-9,"mean":1.5385555333701272e-7,"moe":2.014676548368518e-9,"rme":1.3094597527821903,"sem":1.027896198147203e-9,"variance":9.931763585155458e-17}},{"name":"Method","hz":358215723.1731759,"cycles":7,"stats":{"deviation":1.7099247516433274e-11,"mean":2.7916139223083734e-9,"moe":3.402884456926293e-12,"rme":0.12189667166126118,"sem":1.7361655392481086e-12,"variance":2.923842656282495e-22}},{"name":"DefineProperty (setter)","hz":657328654.2433634,"cycles":9,"stats":{"deviation":1.19697499151492e-10,"mean":1.5213090035624236e-9,"moe":2.486830268715834e-11,"rme":1.634664793866641,"sem":1.268790953426446e-11,"variance":1.4327491303121425e-20}},{"name":"DefineProperty (setter & enumerable=false)","hz":6672504.987041762,"cycles":5,"stats":{"deviation":2.588810371874994e-9,"mean":1.4986875273110098e-7,"moe":5.233501879370513e-10,"rme":0.34920567389792184,"sem":2.6701540200869966e-10,"variance":6.701939141527544e-18}},{"name":"DefineProperty (setter & configurable=false)","hz":6696642.049876177,"cycles":6,"stats":{"deviation":2.6610262632636603e-9,"mean":1.4932857282083494e-7,"moe":5.241886763076672e-10,"rme":0.3510303931830856,"sem":2.674432021977894e-10,"variance":7.08106077377896e-18}},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","hz":6628603.429962943,"cycles":5,"stats":{"deviation":8.102084850388359e-10,"mean":1.5086134063772018e-7,"moe":1.5960087247874992e-10,"rme":0.105793089073772,"sem":8.142901657079077e-11,"variance":6.564377892289257e-19}},{"name":"DefineProperty (writable)","hz":592989220.4840257,"cycles":9,"stats":{"deviation":1.7645240041107912e-9,"mean":1.6863712955587168e-9,"moe":3.75123420042887e-10,"rme":22.244414443653334,"sem":1.9138950002188114e-10,"variance":3.1135449610831797e-18}},{"name":"DefineProperty (writable & enumerable=false)","hz":77126653.43090913,"cycles":4,"stats":{"deviation":2.4233806444988243e-9,"mean":1.2965686380983852e-8,"moe":5.343971835229317e-10,"rme":4.121626636802709,"sem":2.7265162424639373e-10,"variance":5.872773748131538e-18}},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","hz":78175849.13851799,"cycles":6,"stats":{"deviation":2.619838675807314e-9,"mean":1.2791674296087566e-8,"moe":5.777195641196575e-10,"rme":4.516371748898871,"sem":2.947548796528865e-10,"variance":6.8635546872558205e-18}},{"name":"DefineProperties (setter)","hz":57450492.37575514,"cycles":5,"stats":{"deviation":2.480428430020309e-9,"mean":1.7406291202162317e-8,"moe":5.336342865139946e-10,"rme":3.065755250881378,"sem":2.7226239107856865e-10,"variance":6.152525196453015e-18}},{"name":"DefineProperties (setter & enumerable=false)","hz":6611841.354776185,"cycles":5,"stats":{"deviation":2.7535228047090705e-9,"mean":1.5124379826167964e-7,"moe":5.451697012612438e-10,"rme":0.3604575576170071,"sem":2.7814780676594076e-10,"variance":7.581887836052906e-18}},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","hz":6666245.688778897,"cycles":5,"stats":{"deviation":1.0245661305883713e-9,"mean":1.5000947260063813e-7,"moe":2.0182663027312376e-10,"rme":0.13454259039389838,"sem":1.0297277054751213e-10,"variance":1.0497357559488278e-18}}]}-->
