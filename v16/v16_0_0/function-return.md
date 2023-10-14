## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,296,975|93|
|Function returning explicitly undefined|1,278,389|97|
|Function returning implicitly undefined|1,307,101|92|
|Function returning string|1,266,823|99|
|Function returning integer|1,309,455|97|
|Function returning float|1,306,592|99|
|Function returning functions|1,269,312|95|
|Function returning arrow functions|1,286,676|96|
|Function returning empty object|1,311,116|99|
|Function returning empty array|1,295,314|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:17:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1296974.9477573214,"cycles":5,"stats":{"deviation":9.124485183625351e-9,"mean":7.710249158853538e-7,"moe":1.8544834734417806e-9,"rme":0.24052186060839698,"sem":9.461650374702963e-10,"variance":8.325622986619856e-17}},{"name":"Function returning explicitly undefined","hz":1278389.1877927056,"cycles":7,"stats":{"deviation":4.280372599264327e-8,"mean":7.822344005635886e-7,"moe":8.51827741185187e-9,"rme":1.0889673741930264,"sem":4.346059904006056e-9,"variance":1.832158958853285e-15}},{"name":"Function returning implicitly undefined","hz":1307100.506396551,"cycles":7,"stats":{"deviation":1.075720419616216e-8,"mean":7.650521096934055e-7,"moe":2.1981714872579578e-9,"rme":0.2873231064141336,"sem":1.1215160649275295e-9,"variance":1.157174421179288e-16}},{"name":"Function returning string","hz":1266822.5639944351,"cycles":6,"stats":{"deviation":1.494410516427676e-8,"mean":7.893765302434199e-7,"moe":2.9438005978404906e-9,"rme":0.3729273021244641,"sem":1.5019390805308625e-9,"variance":2.233262791609634e-16}},{"name":"Function returning integer","hz":1309455.2628217163,"cycles":6,"stats":{"deviation":6.073026455949749e-9,"mean":7.636763380866652e-7,"moe":1.208579928069504e-9,"rme":0.15825813473513034,"sem":6.166224122803592e-10,"variance":3.688165033466557e-17}},{"name":"Function returning float","hz":1306592.191182282,"cycles":7,"stats":{"deviation":3.6154160957203713e-9,"mean":7.653497447395126e-7,"moe":7.121914592427753e-10,"rme":0.09305437992733247,"sem":3.633629894095792e-10,"variance":1.3071233545193934e-17}},{"name":"Function returning functions","hz":1269312.4128037805,"cycles":6,"stats":{"deviation":1.754940836406978e-8,"mean":7.8782811064701e-7,"moe":3.529041362393796e-9,"rme":0.44794560065844097,"sem":1.8005313073437736e-9,"variance":3.0798173392888236e-16}},{"name":"Function returning arrow functions","hz":1286676.1810706868,"cycles":7,"stats":{"deviation":3.8902060061419334e-9,"mean":7.771963254716243e-7,"moe":7.782032762642513e-10,"rme":0.10012956196003835,"sem":3.970424878899242e-10,"variance":1.5133702770222776e-17}},{"name":"Function returning empty object","hz":1311116.2709905466,"cycles":6,"stats":{"deviation":3.5017025829564233e-9,"mean":7.62708862765086e-7,"moe":6.897913286777644e-10,"rme":0.09043966346176048,"sem":3.5193435136620633e-10,"variance":1.2261920979483688e-17}},{"name":"Function returning empty array","hz":1295314.3203820817,"cycles":7,"stats":{"deviation":1.8587992467532734e-8,"mean":7.720133903136559e-7,"moe":3.6802347462823216e-9,"rme":0.4767060769227208,"sem":1.8776707889195518e-9,"variance":3.455134639730537e-16}}]}-->
