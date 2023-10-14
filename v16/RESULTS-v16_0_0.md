## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|709,530,058|97|
|Using dot notation|707,076,596|97|
|Using define property (writable)|3,040,886|96|
|Using define property initialized (writable)|3,816,550|95|
|Using define property (getter)|1,599,571|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:59:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":709530058.071877,"cycles":9,"stats":{"deviation":9.479967196323618e-12,"mean":1.409383561166478e-9,"moe":1.88658787432242e-12,"rme":0.13385908040256855,"sem":9.625448338379693e-13,"variance":8.986977804337186e-23}},{"name":"Using dot notation","hz":707076596.1982301,"cycles":7,"stats":{"deviation":4.815331598155712e-11,"mean":1.4142739349269146e-9,"moe":9.582887805186922e-12,"rme":0.6775835691041097,"sem":4.889228472034144e-12,"variance":2.3187418400196847e-21}},{"name":"Using define property (writable)","hz":3040885.54883185,"cycles":6,"stats":{"deviation":3.4171291031820686e-9,"mean":3.288515743001732e-7,"moe":6.835681861875126e-10,"rme":0.20786526190188062,"sem":3.4875927866709826e-10,"variance":1.1676771307813888e-17}},{"name":"Using define property initialized (writable)","hz":3816549.8640695135,"cycles":9,"stats":{"deviation":4.4936030118829206e-9,"mean":2.620167522018746e-7,"moe":9.036265249590787e-10,"rme":0.3448735691002179,"sem":4.610339413056524e-10,"variance":2.019246802840326e-17}},{"name":"Using define property (getter)","hz":1599571.4516451752,"cycles":4,"stats":{"deviation":4.937764481185822e-8,"mean":6.251674465504432e-7,"moe":1.0316802260924241e-8,"rme":1.6502462368842816,"sem":5.263674622920532e-9,"variance":2.438151807166029e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.037ms
new Array(length)|100|0.011ms
array.push|1,000|0.076ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.649ms
new Array(length)|10,000|0.442ms
array.push|1,000,000|36.588ms
new Array(length)|1,000,000|9.275ms
array.push|100,000,000|2,068.447ms
new Array(length)|100,000,000|5,861.228ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.038ms
new Array(length)|100|0.016ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.587ms
new Array(length)|10,000|4.675ms
array.push|1,000,000|131.334ms
new Array(length)|1,000,000|6.299ms
array.push|100,000,000|2,788.624ms
new Array(length)|100,000,000|5,830.195ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|232|78|
|Array.from|11|31|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Array","hz":232.36199048675564,"cycles":3,"stats":{"deviation":0.0005683162523974906,"mean":0.004303629857470165,"moe":0.00012612432238127722,"rme":2.930649859730684,"sem":0.00006434914407208021,"variance":3.2298336273912827e-7}},{"name":"Array.from","hz":11.029071147958058,"cycles":1,"stats":{"deviation":0.0034975109813313683,"mean":0.09066946677419356,"moe":0.0012827262359660118,"rme":1.4147278919821582,"sem":0.0006281715161439823,"variance":0.000012232583064533511}}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,971|83|
|new Blob (1024)|774|79|
|text (128)|25,103|81|
|text (1024)|10,937|85|
|arrayBuffer (128)|29,380|88|
|arrayBuffer (1024)|12,074|86|
|slice (0, 64)|141,082|84|
|slice (0, 512)|25,617|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","hz":5970.537718632682,"cycles":5,"stats":{"deviation":0.000008804763428107995,"mean":0.00016748910184073183,"moe":0.0000018942387504583037,"rme":1.1309623907706943,"sem":9.664483420705631e-7,"variance":7.752385902494806e-11}},{"name":"new Blob (1024)","hz":773.9662098844991,"cycles":2,"stats":{"deviation":0.00011457063516948525,"mean":0.0012920460702660812,"moe":0.0000252647989443971,"rme":1.9554100682488917,"sem":0.000012890203543059745,"variance":1.3126430443139291e-8}},{"name":"text (128)","hz":25102.884880778,"cycles":4,"stats":{"deviation":0.0000031319426267014816,"mean":0.00003983605887328626,"moe":6.820675053705449e-7,"rme":1.712186206823622,"sem":3.479936251890535e-7,"variance":9.809064616949777e-12}},{"name":"text (1024)","hz":10936.541908440275,"cycles":5,"stats":{"deviation":0.000007015987745594872,"mean":0.00009143658099350858,"moe":0.0000014915418050279376,"rme":1.6312309458878693,"sem":7.609907168509886e-7,"variance":4.922408404633742e-11}},{"name":"arrayBuffer (128)","hz":29379.8172325536,"cycles":4,"stats":{"deviation":0.0000011768184259402302,"mean":0.00003403697143806511,"moe":2.4588056080232014e-7,"rme":0.7223925937409948,"sem":1.2544926571546947e-7,"variance":1.384901607632441e-12}},{"name":"arrayBuffer (1024)","hz":12074.167673226379,"cycles":3,"stats":{"deviation":0.00000431901576955611,"mean":0.00008282144385135797,"moe":9.128336379636113e-7,"rme":1.1021706402533866,"sem":4.65731447940618e-7,"variance":1.8653897217674354e-11}},{"name":"slice (0, 64)","hz":141082.34162446033,"cycles":4,"stats":{"deviation":0.00000321713578274154,"mean":0.000007088059274362255,"moe":6.879958514503253e-7,"rme":9.706406575052624,"sem":3.5101829155628844e-7,"variance":1.0349962644596022e-11}},{"name":"slice (0, 512)","hz":25616.85724010981,"cycles":4,"stats":{"deviation":0.0000023347501438540343,"mean":0.000039036794819398906,"moe":4.797067019739543e-7,"rme":1.2288578101590688,"sem":2.4474831733365014e-7,"variance":5.4510582342264345e-12}}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|294,787|89|
|[True conditional] Using constructor name|284,816|81|
|[True conditional] Check if property is valid then instanceof |290,857|86|
|[False conditional] Using instanceof only|596,564,990|97|
|[False conditional] Using constructor name|596,769,842|90|
|[False conditional] Check if property is valid then instanceof |597,359,644|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:06:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":294786.864098204,"cycles":4,"stats":{"deviation":6.015161760340246e-8,"mean":0.0000033922814134176088,"moe":1.249707507915773e-8,"rme":0.3683973572984722,"sem":6.376058713855985e-9,"variance":3.618217100305956e-15}},{"name":"[True conditional] Using constructor name","hz":284816.04997453623,"cycles":3,"stats":{"deviation":3.300434244374919e-7,"mean":0.000003511038089635062,"moe":7.18761235441649e-8,"rme":2.047147359533081,"sem":3.667149160416577e-8,"variance":1.0892866201442646e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":290856.9998928671,"cycles":3,"stats":{"deviation":3.028264600819552e-7,"mean":0.0000034381156388477334,"moe":6.400304930043443e-8,"rme":1.861573490351963,"sem":3.265461699001757e-8,"variance":9.170386492576801e-14}},{"name":"[False conditional] Using instanceof only","hz":596564990.4541457,"cycles":9,"stats":{"deviation":9.954304721602076e-12,"mean":1.6762633007323013e-9,"moe":1.9809847646274284e-12,"rme":0.11817861571997697,"sem":1.0107065125650145e-12,"variance":9.908818249050937e-23}},{"name":"[False conditional] Using constructor name","hz":596769842.0442057,"cycles":8,"stats":{"deviation":1.5338654015851137e-11,"mean":1.6756878943053644e-9,"moe":3.168998751516699e-12,"rme":0.18911628843809056,"sem":1.6168360977126016e-12,"variance":2.3527430701798624e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":597359644.1501887,"cycles":9,"stats":{"deviation":7.93063844087162e-12,"mean":1.6740334064960358e-9,"moe":1.5782592922880517e-12,"rme":0.09427884092179192,"sem":8.052343328000264e-13,"variance":6.289502607983064e-23}}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,009|92|
|crypto.verify('RSA-SHA256')|20,334|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:08:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":21008.505786771944,"cycles":4,"stats":{"deviation":0.0000015342443020665993,"mean":0.00004759976792969505,"moe":3.1351381063250614e-7,"rme":0.6586456704905927,"sem":1.599560258329113e-7,"variance":2.3539055784238265e-12}},{"name":"crypto.verify('RSA-SHA256')","hz":20333.871580035524,"cycles":3,"stats":{"deviation":0.000004107662297485664,"mean":0.00004917902604351222,"moe":8.348516866285742e-7,"rme":1.6975766984281486,"sem":4.2594473807580315e-7,"variance":1.68728895501852e-11}}]}-->

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

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,984|86|
|Intl.DateTimeFormat().format(new Date())|8,226|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,894|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,498|86|
|Reusing Intl.DateTimeFormat()|387,941|79|
|Date.toLocaleDateString()|483,485|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,287|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:11:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":7984.3840083905725,"cycles":3,"stats":{"deviation":0.000059422981349400696,"mean":0.0001252444770879165,"moe":0.000012559179947007268,"rme":10.02773155273844,"sem":0.000006407744870922076,"variance":3.5310907124512233e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":8226.187801705506,"cycles":4,"stats":{"deviation":0.00001758094171903582,"mean":0.00012156299176547777,"moe":0.000003852593717638157,"rme":3.1692159444962273,"sem":0.0000019656090396113047,"variance":3.090895117281341e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":8893.779114259023,"cycles":5,"stats":{"deviation":0.00012990672761494068,"mean":0.00011243814211629586,"moe":0.00002940066018994752,"rme":26.1482977542782,"sem":0.000015000336831605878,"variance":1.6875757879622395e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":10498.06036591289,"cycles":3,"stats":{"deviation":0.000012843584461084302,"mean":0.00009525569154155289,"moe":0.0000027145202874101664,"rme":2.8497197841727133,"sem":0.0000013849593303113093,"variance":1.6495766180900614e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":387941.21163155563,"cycles":3,"stats":{"deviation":0.000004295259979132224,"mean":0.0000025777101530263374,"moe":9.471788266352726e-7,"rme":36.744970163664284,"sem":4.832545033853432e-7,"variance":1.8449258288334954e-11}},{"name":"Date.toLocaleDateString()","hz":483485.0875760701,"cycles":3,"stats":{"deviation":2.9412508223423646e-8,"mean":0.000002068316119145377,"moe":5.823379524616627e-9,"rme":0.28155171594479633,"sem":2.971112002355422e-9,"variance":8.650956399929636e-16}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":10287.134875469037,"cycles":4,"stats":{"deviation":0.00004301520410584376,"mean":0.00009720879643413885,"moe":0.000009091359547344322,"rme":9.352404186491418,"sem":0.000004638448748645063,"variance":1.8503077842673975e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->

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

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|283,861|88|
|NodeError|288,747|84|
|NodeError Range|287,811|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:15:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":283860.770955142,"cycles":3,"stats":{"deviation":2.8976144303996245e-7,"mean":0.0000035228538153939847,"moe":6.05418002837883e-8,"rme":1.7185442103568378,"sem":3.08886736141777e-8,"variance":8.396169387260141e-14}},{"name":"NodeError","hz":288747.25327845913,"cycles":3,"stats":{"deviation":1.4893242189424436e-7,"mean":0.000003463236407085854,"moe":3.184972451562875e-8,"rme":0.9196520471563404,"sem":1.624985944674936e-8,"variance":2.2180866291285197e-14}},{"name":"NodeError Range","hz":287811.12792469864,"cycles":4,"stats":{"deviation":6.358029579067541e-8,"mean":0.000003474500820071261,"moe":1.3437837647758727e-8,"rme":0.38675592102704187,"sem":6.856039616203432e-9,"variance":4.0424540128297775e-15}}]}-->

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

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,256,484|94|
|using Array.includes (first item)|693,686,085|95|
|Using raw comparison|708,119,961|95|
|Using raw comparison (first item)|707,071,078|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:18:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":707256483.7739236,"cycles":8,"stats":{"deviation":1.3332163956326563e-11,"mean":1.4139142205724234e-9,"moe":2.695211123979538e-12,"rme":0.19062055425741323,"sem":1.3751077163160908e-12,"variance":1.7774659575837315e-22}},{"name":"using Array.includes (first item)","hz":693686085.2408091,"cycles":7,"stats":{"deviation":1.0086108170642508e-10,"mean":1.4415742527873482e-9,"moe":2.028233213414208e-11,"rme":1.4069571577686881,"sem":1.0348128639868408e-11,"variance":1.0172957802990156e-20}},{"name":"Using raw comparison","hz":708119960.6093261,"cycles":6,"stats":{"deviation":1.1959027534926006e-11,"mean":1.4121901028457322e-9,"moe":2.404861859113576e-12,"rme":0.17029306849463763,"sem":1.2269703362824368e-12,"variance":1.4301833958111836e-22}},{"name":"Using raw comparison (first item)","hz":707071078.214041,"cycles":7,"stats":{"deviation":1.2233818497639483e-11,"mean":1.4142849719236925e-9,"moe":2.4601200566157383e-12,"rme":0.17394797409672777,"sem":1.2551632941917033e-12,"variance":1.49666315033186e-22}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|55,725,332|91|
|Using Object.getOwnPropertyNames()|50,289,176|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:20:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":55725332.352198415,"cycles":9,"stats":{"deviation":4.34242175530079e-10,"mean":1.7945159908239635e-8,"moe":8.922105966237061e-11,"rme":0.49718732025009255,"sem":4.552094880733195e-11,"variance":1.8856626700909594e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":50289176.49433634,"cycles":6,"stats":{"deviation":3.3903827436479114e-9,"mean":1.9884994539781775e-8,"moe":7.165649719985276e-10,"rme":3.603546234649313,"sem":3.655943734686365e-10,"variance":1.149469514842554e-17}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|631,787,987|84|
|Length = 10_000 - Array[length - 1]|625,829,853|81|
|Length = 1_000_000 - Array[length - 1]|644,353,599|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:21:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 10_000 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 1_000_000 - Array.at","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"Length = 100 - Array[length - 1]","hz":631787986.8438523,"cycles":6,"stats":{"deviation":8.498065565463225e-11,"mean":1.5828094563740922e-9,"moe":1.81734134000687e-11,"rme":1.1481744266110494,"sem":9.272149693912603e-12,"variance":7.22171183549118e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":625829852.7630394,"cycles":5,"stats":{"deviation":1.0185215741844518e-10,"mean":1.597878393919688e-9,"moe":2.2181136504461397e-11,"rme":1.388161739270395,"sem":1.1316906379827243e-11,"variance":1.0373861970791738e-20}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":644353599.283094,"cycles":6,"stats":{"deviation":8.84946954274638e-11,"mean":1.5519429100925285e-9,"moe":1.8813250897730217e-11,"rme":1.2122385930168365,"sem":9.598597396801132e-12,"variance":7.831311118799582e-21}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,478,896|88|
|Object.create({})|1,158,095|81|
|Cached Empty.prototype|745,135,751|92|
|Empty.prototype|1,338,630|63|
|Empty class|886,843|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:23:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":44478895.55139128,"cycles":5,"stats":{"deviation":9.219347662161694e-10,"mean":2.2482572635927792e-8,"moe":1.9262600953862096e-10,"rme":0.8567792158749622,"sem":9.827857629521478e-11,"variance":8.499637131580629e-19}},{"name":"Object.create({})","hz":1158095.1743207844,"cycles":3,"stats":{"deviation":1.3264339529725823e-7,"mean":8.63486889656106e-7,"moe":2.8886783864736236e-8,"rme":3.345364499539854,"sem":1.4738155033028692e-8,"variance":1.759427031598471e-14}},{"name":"Cached Empty.prototype","hz":745135751.3311709,"cycles":6,"stats":{"deviation":5.813580248826728e-11,"mean":1.34203733777841e-9,"moe":1.1879709735747304e-11,"rme":0.8851996439542295,"sem":6.061076395789441e-12,"variance":3.379771530954824e-21}},{"name":"Empty.prototype","hz":1338629.5110590984,"cycles":3,"stats":{"deviation":5.102502988533188e-8,"mean":7.470326865936333e-7,"moe":1.2599957040181162e-8,"rme":1.6866674332063354,"sem":6.428549510296511e-9,"variance":2.6035536747990113e-15}},{"name":"Empty class","hz":886843.4350697612,"cycles":3,"stats":{"deviation":1.255971344369593e-7,"mean":0.0000011275947483575131,"moe":2.901145791627098e-8,"rme":2.572862099484757,"sem":1.4801764242995397e-8,"variance":1.577464017877563e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|596,951,559|90|
|Using optional chain (obj.field?.field2) (undefined)|587,646,548|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|599,266,641|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|597,656,360|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:25:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":596951559.4014133,"cycles":6,"stats":{"deviation":3.939097638106267e-11,"mean":1.6751778000257494e-9,"moe":8.138260035307577e-12,"rme":0.4858147018891059,"sem":4.152173487401825e-12,"variance":1.551649020253437e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":587646548.2842252,"cycles":7,"stats":{"deviation":1.436371155230032e-10,"mean":1.7017031801169246e-9,"moe":2.935140080052483e-11,"rme":1.7248249367735262,"sem":1.4975204490063687e-11,"variance":2.0631620955768565e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":599266641.3105947,"cycles":8,"stats":{"deviation":3.278931742668586e-11,"mean":1.668706267068366e-9,"moe":6.7003044043456965e-12,"rme":0.40152689161508304,"sem":3.4185226552784166e-12,"variance":1.075139337307965e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":597656359.6150204,"cycles":6,"stats":{"deviation":3.108039828944518e-11,"mean":1.6732023075001642e-9,"moe":6.421276813083403e-12,"rme":0.3837716924187766,"sem":3.276161639328267e-12,"variance":9.659911578305468e-22}}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|138,480,848|88|
|Using parseInt(x, 10) - big number (10 len)|8,686,792|83|
|Using + - small number (2 len)|625,436,900|87|
|Using + - big number (10 len)|622,560,167|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:27:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","hz":138480848.01261464,"cycles":7,"stats":{"deviation":3.6661848710941737e-10,"mean":7.221215166944292e-9,"moe":7.660005759931916e-11,"rme":1.0607640934168843,"sem":3.908166204046896e-11,"variance":1.3440911509039802e-19}},{"name":"Using parseInt(x, 10) - big number (10 len)","hz":8686792.096520806,"cycles":7,"stats":{"deviation":6.884406942609562e-9,"mean":1.1511729403544898e-7,"moe":1.4810971937059134e-9,"rme":1.2865983396463674,"sem":7.556618335234252e-10,"variance":4.739505895145074e-17}},{"name":"Using + - small number (2 len)","hz":625436900.1099641,"cycles":7,"stats":{"deviation":7.924944700254243e-11,"mean":1.5988823170237963e-9,"moe":1.665300780003629e-11,"rme":1.041540557596175,"sem":8.496432551038923e-12,"variance":6.28047485020878e-21}},{"name":"Using + - big number (10 len)","hz":622560166.9764786,"cycles":7,"stats":{"deviation":8.369405727582872e-11,"mean":1.6062704507045368e-9,"moe":1.758697178778227e-11,"rme":1.0948948092812347,"sem":8.972944789684831e-12,"variance":7.004695223289697e-21}}]}-->

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

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,852,638|91|
|Raw usage underscore usage|6,288,143|89|
|Manipulating private properties using #|2,386,039|91|
|Manipulating private properties using underscore(_)|758,524,947|90|
|Manipulating private properties using Symbol|771,464,232|88|
|Manipulating private properties using PrivateSymbol|32,524,224|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:30:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Raw usage private field","hz":7852638.478706169,"cycles":5,"stats":{"deviation":7.151312930092359e-9,"mean":1.273457326109789e-7,"moe":1.4693361298247654e-9,"rme":1.1538165431215157,"sem":7.496612907269212e-10,"variance":5.1141276624106156e-17}},{"name":"Raw usage underscore usage","hz":6288143.1393221915,"cycles":5,"stats":{"deviation":1.5215816021434446e-8,"mean":1.5902945875175983e-7,"moe":3.161231614156315e-9,"rme":1.987827688636545,"sem":1.6128732725287322e-9,"variance":2.315210571981412e-16}},{"name":"Manipulating private properties using #","hz":2386039.4447474782,"cycles":6,"stats":{"deviation":1.9760242361368932e-8,"mean":4.19104555124332e-7,"moe":4.0600150377251404e-9,"rme":0.9687356026280106,"sem":2.0714362437373164e-9,"variance":3.904671781800392e-16}},{"name":"Manipulating private properties using underscore(_)","hz":758524947.1914302,"cycles":7,"stats":{"deviation":8.608424850937485e-11,"mean":1.3183482016019024e-9,"moe":1.7785190002300505e-11,"rme":1.3490510307284542,"sem":9.074076531785973e-12,"variance":7.410497841423805e-21}},{"name":"Manipulating private properties using Symbol","hz":771464231.9967307,"cycles":7,"stats":{"deviation":5.40273901745443e-11,"mean":1.296236375614933e-9,"moe":1.1288304722276174e-11,"rme":0.8708523333115855,"sem":5.759339144018456e-12,"variance":2.918958889072446e-21}},{"name":"Manipulating private properties using PrivateSymbol","hz":32524223.84645274,"cycles":6,"stats":{"deviation":3.1601964073822656e-9,"mean":3.074631403107457e-8,"moe":6.718319963813013e-10,"rme":2.185081423751467,"sem":3.427714267251537e-10,"variance":9.986841333231778e-18}}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,617,475|93|
|Adding property in the object creation - small object|1,603,512|92|
|Adding property after the function creation - small class|142,463|81|
|Adding property in the function creation - small class|141,658|82|
|Adding property after the class creation - small class|117,606|76|
|Adding property in the class creation - small class|117,660|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Adding property after object creation - small object","hz":1617474.7081425535,"cycles":5,"stats":{"deviation":8.840259710661802e-9,"mean":6.182476887990181e-7,"moe":1.7967167686102597e-9,"rme":0.29061439309227116,"sem":9.166922288827855e-10,"variance":7.81501917519503e-17}},{"name":"Adding property in the object creation - small object","hz":1603512.217364074,"cycles":6,"stats":{"deviation":5.143308855277024e-8,"mean":6.236310451340653e-7,"moe":1.0510049516271996e-8,"rme":1.6852992804443523,"sem":5.362270161363263e-9,"variance":2.6453625980771046e-15}},{"name":"Adding property after the function creation - small class","hz":142463.4368274372,"cycles":3,"stats":{"deviation":8.066305993551659e-7,"mean":0.000007019344908906542,"moe":1.75666219415125e-7,"rme":2.5026013352361383,"sem":8.962562215057398e-8,"variance":6.506529238160742e-13}},{"name":"Adding property in the function creation - small class","hz":141657.51422365877,"cycles":4,"stats":{"deviation":7.652171647634481e-7,"mean":0.000007059279597559013,"moe":1.656280345956499e-7,"rme":2.346245566656992,"sem":8.450409928349485e-8,"variance":5.8555730924861e-13}},{"name":"Adding property after the class creation - small class","hz":117606.09483078087,"cycles":4,"stats":{"deviation":0.0000012890306827403455,"mean":0.00000850296067936669,"moe":2.8980944166129663e-7,"rme":3.4083356678874113,"sem":1.478619600312738e-7,"variance":1.6616001010460411e-12}},{"name":"Adding property in the class creation - small class","hz":117659.95022087032,"cycles":3,"stats":{"deviation":0.0000010487544618830542,"mean":0.00000849906869859122,"moe":2.312684273969342e-7,"rme":2.721103165518224,"sem":1.1799409561068072e-7,"variance":1.0998859213196145e-12}}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|705,586,045|87|
|Getter|54,885,029|86|
|Method|694,151,512|91|
|DefineProperty (getter)|698,374,437|89|
|DefineProperty (getter & enumerable=false)|52,378,220|90|
|DefineProperty (getter & configurable=false)|717,041,491|92|
|DefineProperty (getter & enumerable=false & configurable=false)|54,981,962|92|
|DefineProperty (writable)|713,571,840|92|
|DefineProperty (writable & enumerable=false)|407,531,869|55|
|DefineProperty (writable & enumerable=false & configurable=false)|81,245,045|82|
|DefineProperties (getter)|33,154,177|83|
|DefineProperties (getter & enumerable=false)|33,906,809|85|
|DefineProperties (getter & enumerable=false & configurable=false)|54,965,666|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:35:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Getter (class)","hz":705586045.1792839,"cycles":7,"stats":{"deviation":1.0040427861989643e-10,"mean":1.4172615896136493e-9,"moe":2.1098358389308522e-11,"rme":1.4886707255687364,"sem":1.0764468565973736e-11,"variance":1.0081019165181791e-20}},{"name":"Getter","hz":54885028.612257324,"cycles":5,"stats":{"deviation":9.634285558170964e-10,"mean":1.821990486813143e-8,"moe":2.0362277899599668e-10,"rme":1.1175842051302627,"sem":1.0388917295714116e-10,"variance":9.281945821638159e-19}},{"name":"Method","hz":694151511.9051033,"cycles":7,"stats":{"deviation":8.894406422855472e-11,"mean":1.4406076812474174e-9,"moe":1.8274787914054002e-11,"rme":1.2685471660285697,"sem":9.32387138472143e-12,"variance":7.911046561493267e-21}},{"name":"DefineProperty (getter)","hz":698374437.0876744,"cycles":8,"stats":{"deviation":7.589206348951169e-11,"mean":1.4318966257845135e-9,"moe":1.576730357600533e-11,"rme":1.10114817592832,"sem":8.044542640819047e-12,"variance":5.759605300696073e-21}},{"name":"DefineProperty (getter & enumerable=false)","hz":52378219.60269992,"cycles":6,"stats":{"deviation":9.373018080118566e-10,"mean":1.9091905138914905e-8,"moe":1.936485597963399e-10,"rme":1.0142966790759258,"sem":9.88002856103775e-11,"variance":8.78534679302295e-19}},{"name":"DefineProperty (getter & configurable=false)","hz":717041490.9028913,"cycles":6,"stats":{"deviation":5.069221427699292e-11,"mean":1.3946194365137926e-9,"moe":1.0358656210078401e-11,"rme":0.742758629262511,"sem":5.285028678611429e-12,"variance":2.569700588304565e-21}},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","hz":54981962.227602236,"cycles":6,"stats":{"deviation":8.00539359762416e-10,"mean":1.818778303801563e-8,"moe":1.6358551561987623e-10,"rme":0.899425264079487,"sem":8.346199776524298e-11,"variance":6.408632665288189e-19}},{"name":"DefineProperty (writable)","hz":713571840.4756671,"cycles":7,"stats":{"deviation":7.937067980386411e-11,"mean":1.4014005924524709e-9,"moe":1.6218932176762135e-11,"rme":1.1573373283922175,"sem":8.274965396307212e-12,"variance":6.299704812527523e-21}},{"name":"DefineProperty (writable & enumerable=false)","hz":407531869.46778953,"cycles":7,"stats":{"deviation":3.3669413543929205e-9,"mean":2.45379582535701e-9,"moe":8.898366280369755e-10,"rme":36.26367845448227,"sem":4.539982796107018e-10,"variance":1.1336294083921234e-17}},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","hz":81245045.32419689,"cycles":5,"stats":{"deviation":2.004105634084562e-9,"mean":1.2308442884235477e-8,"moe":4.33780229430826e-10,"rme":3.524249440084798,"sem":2.2131644358715613e-10,"variance":4.0164393925694834e-18}},{"name":"DefineProperties (getter)","hz":33154177.16929698,"cycles":5,"stats":{"deviation":2.5832535045456863e-9,"mean":3.016211184773628e-8,"moe":5.557558622127736e-10,"rme":1.8425628318677694,"sem":2.8354890929223146e-10,"variance":6.6731986687475705e-18}},{"name":"DefineProperties (getter & enumerable=false)","hz":33906808.977688454,"cycles":6,"stats":{"deviation":2.4134893737455524e-9,"mean":2.9492601343229486e-8,"moe":5.130881676913428e-10,"rme":1.739718249062254,"sem":2.6177967739354223e-10,"variance":5.824930957182698e-18}},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","hz":54965665.8025049,"cycles":6,"stats":{"deviation":9.204887289275868e-10,"mean":1.8193175419598538e-8,"moe":1.891271378740114e-10,"rme":1.0395499054567177,"sem":9.649343769082215e-11,"variance":8.472995000827243e-19}}]}-->

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

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,716,202|93|
|{ ...object, __proto__: null }|14,694,866|95|
|{ ...object, newProp: true }|484,093|84|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|139,736|94|
|loop + object.keys starting with {}|361,263|96|
|loop + object.keys starting with { __proto__: null }|500,902|97|
|loop + object.keys starting with { randomProp: true }|362,311|94|
|object.keys + reduce(FN, {})|368,581|94|
|object.keys + reduce(FN, { __proto__: null })|527,966|97|
|object.keys + reduce(FN, { newProp: true })|394,160|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:41:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"{ ...object }","hz":14716201.814385938,"cycles":6,"stats":{"deviation":1.429155313652671e-9,"mean":6.795231627106678e-8,"moe":2.904651448069254e-10,"rme":0.42745436910235496,"sem":1.4819650245251298e-10,"variance":2.0424849105416643e-18}},{"name":"{ ...object, __proto__: null }","hz":14694865.810501888,"cycles":5,"stats":{"deviation":4.476672351383089e-9,"mean":6.805097868163833e-8,"moe":9.0022190869185e-10,"rme":1.3228640147900619,"sem":4.592968921897194e-10,"variance":2.0040595341637794e-17}},{"name":"{ ...object, newProp: true }","hz":484093.4604622094,"cycles":3,"stats":{"deviation":2.681871788314857e-7,"mean":0.0000020657168122973738,"moe":5.735277554589062e-8,"rme":2.776410358112257,"sem":2.9261620176474807e-8,"variance":7.19243628895913e-14}},{"name":"structuredClone","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}},{"name":"JSON.parse + JSON.stringify","hz":139736.0965172353,"cycles":6,"stats":{"deviation":4.7607536112819425e-8,"mean":0.000007156347035045868,"moe":9.624271148843766e-9,"rme":0.13448580821628756,"sem":4.910342422879472e-9,"variance":2.2664774947334054e-15}},{"name":"loop + object.keys starting with {}","hz":361263.153013392,"cycles":4,"stats":{"deviation":3.430317195949241e-8,"mean":0.0000027680653054670375,"moe":6.862063541875843e-9,"rme":0.24790107113163112,"sem":3.501052827487675e-9,"variance":1.1767076064825065e-15}},{"name":"loop + object.keys starting with { __proto__: null }","hz":500901.7476193403,"cycles":4,"stats":{"deviation":5.135859748859614e-8,"mean":0.0000019963995030018318,"moe":1.0220763981310695e-8,"rme":0.5119598540243334,"sem":5.214675500668722e-9,"variance":2.6377055359956344e-15}},{"name":"loop + object.keys starting with { randomProp: true }","hz":362311.30441091146,"cycles":7,"stats":{"deviation":8.906786032725161e-8,"mean":0.0000027600574087135322,"moe":1.8005830766066247e-8,"rme":0.6523716031855583,"sem":9.1866483500338e-9,"variance":7.933083743274802e-15}},{"name":"object.keys + reduce(FN, {})","hz":368580.58739861276,"cycles":6,"stats":{"deviation":4.5332575772026836e-8,"mean":0.0000027131108750405226,"moe":9.1643684325854e-9,"rme":0.33778083000196313,"sem":4.67569817989051e-9,"variance":2.0550424261265544e-15}},{"name":"object.keys + reduce(FN, { __proto__: null })","hz":527966.4191502299,"cycles":4,"stats":{"deviation":3.4765842314778716e-8,"mean":0.0000018940598563247932,"moe":6.918675475702332e-9,"rme":0.3652828316169074,"sem":3.5299364671950675e-9,"variance":1.2086637918560585e-15}},{"name":"object.keys + reduce(FN, { newProp: true })","hz":394160.1512408865,"cycles":6,"stats":{"deviation":3.039902114151045e-8,"mean":0.000002537039822142907,"moe":6.112992572690656e-9,"rme":0.24094980769861649,"sem":3.1188737615768654e-9,"variance":9.241004863619992e-16}}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|156,541|87|
|Sort using first char|711,015|87|
|Sort using localeCompare|389,372|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Sort using default","hz":156541.2439845462,"cycles":7,"stats":{"deviation":3.734493723039192e-7,"mean":0.000006388092840879177,"moe":7.847443162217027e-8,"rme":1.228448514711474,"sem":4.0037975317433815e-8,"variance":1.3946443367419125e-13}},{"name":"Sort using first char","hz":711014.590295143,"cycles":6,"stats":{"deviation":1.1750855004757947e-7,"mean":0.000001406440899595181,"moe":2.469254833349836e-8,"rme":1.7556762136685353,"sem":1.259823894566243e-8,"variance":1.380825933428449e-14}},{"name":"Sort using localeCompare","hz":389371.63122535823,"cycles":5,"stats":{"deviation":1.5828988931261018e-7,"mean":0.0000025682405183268883,"moe":3.28862416311704e-8,"rme":1.2804969548800105,"sem":1.6778694709780816e-8,"variance":2.5055689058598386e-14}}]}-->

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



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|708,648,375|95|
|Using backtick (`)|690,924,832|92|
|Using array.join|6,302,797|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:49:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using + sign","hz":708648374.6431603,"cycles":7,"stats":{"deviation":1.4630253900870436e-11,"mean":1.4111370826237337e-9,"moe":2.94202346240928e-12,"rme":0.2084860144798379,"sem":1.501032378780245e-12,"variance":2.140443292039346e-22}},{"name":"Using backtick (`)","hz":690924831.5649358,"cycles":6,"stats":{"deviation":1.9342461397584168e-10,"mean":1.4473354470919983e-9,"moe":3.9525183646440734e-11,"rme":2.730893085349022,"sem":2.0165910023694253e-11,"variance":3.741308129170337e-20}},{"name":"Using array.join","hz":6302797.31389719,"cycles":6,"stats":{"deviation":6.103528349399969e-10,"mean":1.5865971095010082e-7,"moe":1.220959957075728e-10,"rme":0.07695463137832927,"sem":6.229387536100653e-11,"variance":3.725305831192911e-19}}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,192,191|97|
|Using indexof|580,122,613|96|
|Using RegExp.test|9,459,159|97|
|Using RegExp.text with cached regex pattern|10,034,585|98|
|Using new RegExp.test|2,581,251|95|
|Using new RegExp.test with cached regex pattern|3,052,740|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:51:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using includes","hz":10192191.491773639,"cycles":6,"stats":{"deviation":1.2035832614863126e-9,"mean":9.81143261296772e-8,"moe":2.395225151979517e-10,"rme":0.24412593414887854,"sem":1.2220536489691413e-10,"variance":1.4486126673300294e-18}},{"name":"Using indexof","hz":580122612.5806806,"cycles":9,"stats":{"deviation":5.56002309306514e-11,"mean":1.7237735235858006e-9,"moe":1.1122362621148874e-11,"rme":0.6452334061850591,"sem":5.674674806708609e-12,"variance":3.0913856795417642e-21}},{"name":"Using RegExp.test","hz":9459159.119461875,"cycles":6,"stats":{"deviation":4.478690406383676e-10,"mean":1.0571764227356493e-7,"moe":8.912945412727095e-11,"rme":0.08430896888206339,"sem":4.5474211289423957e-11,"variance":2.0058667756233174e-19}},{"name":"Using RegExp.text with cached regex pattern","hz":10034585.299107278,"cycles":5,"stats":{"deviation":1.9867706280545894e-9,"mean":9.965533902920378e-8,"moe":3.9336051545270374e-10,"rme":0.39472096456109623,"sem":2.0069414053709374e-10,"variance":3.947257528500428e-18}},{"name":"Using new RegExp.test","hz":2581251.2222448997,"cycles":4,"stats":{"deviation":1.556481831326517e-8,"mean":3.874090175268975e-7,"moe":3.1299566621355308e-9,"rme":0.8079204459710906,"sem":1.5969166643548626e-9,"variance":2.4226356912495477e-16}},{"name":"Using new RegExp.test with cached regex pattern","hz":3052740.0524285007,"cycles":6,"stats":{"deviation":2.885152676772611e-9,"mean":3.275745667255504e-7,"moe":5.771507375296318e-10,"rme":0.1761891172745356,"sem":2.9446466200491423e-10,"variance":8.324105968288163e-18}}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|147,822,528|84|
|Using this|141,007,120|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:53:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using super","hz":147822528.13923135,"cycles":6,"stats":{"deviation":5.765388620441261e-10,"mean":6.764868742186023e-9,"moe":1.2329487223204248e-10,"rme":1.8225759719944037,"sem":6.290554705716453e-11,"variance":3.323970594471359e-19}},{"name":"Using this","hz":141007120.41366765,"cycles":7,"stats":{"deviation":9.80215770264391e-10,"mean":7.091840447959898e-9,"moe":2.1088161096045858e-10,"rme":2.973580870972959,"sem":1.075926586532952e-10,"variance":9.608229562750134e-19}}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,364,992|94|
|Date.now()|13,874,714|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 10 2023 22:04:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":"[{\"timeStamp\":1696975485904,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":8.139593676256691e-10,\"rme\":0.5994803920540754,\"sem\":4.1528539164574956e-10,\"deviation\":4.026341256320703e-9,\"mean\":1.3577747969982757e-7,\"sample\":[1.426924069864092e-7,1.447052113480527e-7,1.3591852637602298e-7,1.3781433343814922e-7,1.3687030413126596e-7,1.341352019012558e-7,1.36725081518754e-7,1.351940883162258e-7,1.3428283591487218e-7,1.3538186354959534e-7,1.354268419037624e-7,1.3474921354812282e-7,1.3593606915957412e-7,1.3485416304117928e-7,1.617606857057184e-7,1.343077215518603e-7,1.34297547876513e-7,1.3516098502595627e-7,1.342263321490818e-7,1.3392700655666603e-7,1.3551787220257393e-7,1.3481132651340114e-7,1.352805025677672e-7,1.3574980135134413e-7,1.3489626540526993e-7,1.3736647610616636e-7,1.3439923846904547e-7,1.3348837438738887e-7,1.3731981367022723e-7,1.3734327554301742e-7,1.341552552568567e-7,1.3450616210796889e-7,1.333225200915117e-7,1.3332731965635115e-7,1.33386516955796e-7,1.3587912295951833e-7,1.3506718590847763e-7,1.3460775556349557e-7,1.3387447804732372e-7,1.3427951332412527e-7,1.3477174069551026e-7,1.3389447890057968e-7,1.3381155041942863e-7,1.3417205640021972e-7,1.3508665081032653e-7,1.3639854786499357e-7,1.3616443575782462e-7,1.3478613939002863e-7,1.343557757429993e-7,1.3378035058154727e-7,1.3392434019315582e-7,1.343459073044044e-7,1.3347770868774565e-7,1.3600039864037058e-7,1.3376133932534103e-7,1.3447331899999733e-7,1.339138883647506e-7,1.3470958517483038e-7,1.3396145944897271e-7,1.3425193805660162e-7,1.347951599743807e-7,1.3377569037868178e-7,1.3386312549996145e-7,1.3319366746483326e-7,1.3460062081593712e-7,1.3445445002245676e-7,1.342832977657536e-7,1.3428967601168282e-7,1.3346288791030059e-7,1.4814182029823616e-7,1.3432768238461354e-7,1.3536761551933539e-7,1.361614520076858e-7,1.344050186165053e-7,1.3586246641454878e-7,1.352831011031708e-7,1.3585396474424563e-7,1.3678679384180356e-7,1.3657179114433706e-7,1.368776838462949e-7,1.3535007534303004e-7,1.3487940863029826e-7,1.349495666779172e-7,1.3506810903611415e-7,1.3495696278559262e-7,1.3610267647144806e-7,1.3530351946295171e-7,1.3537527738725786e-7,1.3518046981096473e-7,1.3434782701133999e-7,1.347268117540442e-7,1.5560214362215272e-7,1.3568037546607704e-7,1.3621509571355298e-7],\"variance\":1.6211423912350177e-17},\"times\":{\"cycle\":0.05109021428397142,\"elapsed\":5.596,\"period\":1.3577747969982757e-7,\"timeStamp\":1696975480307},\"running\":false,\"count\":376279,\"cycles\":5,\"hz\":7364991.618718859},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.9101393492559668e-10,\"rme\":0.2650263770683294,\"sem\":9.74560892477534e-11,\"deviation\":9.696758447105618e-10,\"mean\":7.207355623940377e-8,\"sample\":[8.111303269777685e-8,7.185010398382186e-8,7.196069201919357e-8,7.152838703506209e-8,7.216942277958378e-8,7.152738766751898e-8,7.152024932792532e-8,7.201237502551956e-8,7.153438324032077e-8,7.195412617443532e-8,7.142973232654193e-8,7.179093944832056e-8,7.138661675539622e-8,7.142202291978077e-8,7.158806355406507e-8,7.142759082466382e-8,7.231476222904648e-8,7.170227984289942e-8,7.205306498887132e-8,7.169842513951885e-8,7.206891210276924e-8,7.17726652989608e-8,7.159349011982417e-8,7.181064126559905e-8,7.144329659943778e-8,7.212487811285144e-8,7.169542703688951e-8,7.241113124122876e-8,7.1856756367042e-8,7.183862641214203e-8,7.231090609799799e-8,7.166872964680924e-8,7.236544444016145e-8,7.184690545840275e-8,7.234674199042606e-8,7.181278276747715e-8,7.245867401059044e-8,7.201037771810126e-8,7.185404379799641e-8,7.22687898943954e-8,7.195241297293285e-8,7.216856617883253e-8,7.177195146500144e-8,7.233860428328929e-8,7.184119478672783e-8,7.202622340433126e-8,7.250493045115734e-8,7.168243525882906e-8,7.225080127861939e-8,7.196940079349783e-8,7.250021914702552e-8,7.192642798914401e-8,7.258702278415232e-8,7.160933723372209e-8,7.181749549927688e-8,7.235473693077097e-8,7.18210632414058e-8,7.206577123334804e-8,7.183876775126599e-8,7.222781439745989e-8,7.234631369005044e-8,7.191086640882984e-8,7.251892302442883e-8,7.193171036044332e-8,7.235102499418226e-8,7.16565930418321e-8,7.21692800127919e-8,7.171641375529487e-8,7.21144561370447e-8,7.190744000582488e-8,7.185318719724518e-8,7.202279842899423e-8,7.155722592702047e-8,7.227964017057776e-8,7.175125028017984e-8,7.211973708067609e-8,7.181535399739879e-8,7.194327589825297e-8,7.176781265570503e-8,7.170099636944049e-8,7.227735590190779e-8,7.18397671188091e-8,7.228392317433395e-8,7.181963700115498e-8,7.26546956711681e-8,7.228992080726055e-8,7.244253993544086e-8,7.229891368748064e-8,7.182392000491119e-8,7.24892261040513e-8,7.196126451402898e-8,7.244025566677088e-8,7.195098387734619e-8,7.276177219274087e-8,7.189930229868811e-8,7.19765405607594e-8,7.207790641065725e-8,7.180378988725706e-8,7.195799800983092e-8],\"variance\":9.402712438151417e-19},\"times\":{\"cycle\":0.05048341795299669,\"elapsed\":5.479,\"period\":7.207355623940377e-8,\"timeStamp\":1696975485917},\"running\":false,\"count\":700443,\"cycles\":4,\"hz\":13874714.280482305},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":8.139593676256691e-10,\"rme\":0.5994803920540754,\"sem\":4.1528539164574956e-10,\"deviation\":4.026341256320703e-9,\"mean\":1.3577747969982757e-7,\"sample\":[1.426924069864092e-7,1.447052113480527e-7,1.3591852637602298e-7,1.3781433343814922e-7,1.3687030413126596e-7,1.341352019012558e-7,1.36725081518754e-7,1.351940883162258e-7,1.3428283591487218e-7,1.3538186354959534e-7,1.354268419037624e-7,1.3474921354812282e-7,1.3593606915957412e-7,1.3485416304117928e-7,1.617606857057184e-7,1.343077215518603e-7,1.34297547876513e-7,1.3516098502595627e-7,1.342263321490818e-7,1.3392700655666603e-7,1.3551787220257393e-7,1.3481132651340114e-7,1.352805025677672e-7,1.3574980135134413e-7,1.3489626540526993e-7,1.3736647610616636e-7,1.3439923846904547e-7,1.3348837438738887e-7,1.3731981367022723e-7,1.3734327554301742e-7,1.341552552568567e-7,1.3450616210796889e-7,1.333225200915117e-7,1.3332731965635115e-7,1.33386516955796e-7,1.3587912295951833e-7,1.3506718590847763e-7,1.3460775556349557e-7,1.3387447804732372e-7,1.3427951332412527e-7,1.3477174069551026e-7,1.3389447890057968e-7,1.3381155041942863e-7,1.3417205640021972e-7,1.3508665081032653e-7,1.3639854786499357e-7,1.3616443575782462e-7,1.3478613939002863e-7,1.343557757429993e-7,1.3378035058154727e-7,1.3392434019315582e-7,1.343459073044044e-7,1.3347770868774565e-7,1.3600039864037058e-7,1.3376133932534103e-7,1.3447331899999733e-7,1.339138883647506e-7,1.3470958517483038e-7,1.3396145944897271e-7,1.3425193805660162e-7,1.347951599743807e-7,1.3377569037868178e-7,1.3386312549996145e-7,1.3319366746483326e-7,1.3460062081593712e-7,1.3445445002245676e-7,1.342832977657536e-7,1.3428967601168282e-7,1.3346288791030059e-7,1.4814182029823616e-7,1.3432768238461354e-7,1.3536761551933539e-7,1.361614520076858e-7,1.344050186165053e-7,1.3586246641454878e-7,1.352831011031708e-7,1.3585396474424563e-7,1.3678679384180356e-7,1.3657179114433706e-7,1.368776838462949e-7,1.3535007534303004e-7,1.3487940863029826e-7,1.349495666779172e-7,1.3506810903611415e-7,1.3495696278559262e-7,1.3610267647144806e-7,1.3530351946295171e-7,1.3537527738725786e-7,1.3518046981096473e-7,1.3434782701133999e-7,1.347268117540442e-7,1.5560214362215272e-7,1.3568037546607704e-7,1.3621509571355298e-7],\"variance\":1.6211423912350177e-17},\"times\":{\"cycle\":0.05109021428397142,\"elapsed\":5.596,\"period\":1.3577747969982757e-7,\"timeStamp\":1696975480307},\"running\":false,\"count\":376279,\"cycles\":5,\"hz\":7364991.618718859},\"aborted\":false},{\"timeStamp\":1696975491396,\"currentTarget\":{\"0\":{\"name\":\"new Date().getTime()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":1,\"stats\":{\"moe\":8.139593676256691e-10,\"rme\":0.5994803920540754,\"sem\":4.1528539164574956e-10,\"deviation\":4.026341256320703e-9,\"mean\":1.3577747969982757e-7,\"sample\":[1.426924069864092e-7,1.447052113480527e-7,1.3591852637602298e-7,1.3781433343814922e-7,1.3687030413126596e-7,1.341352019012558e-7,1.36725081518754e-7,1.351940883162258e-7,1.3428283591487218e-7,1.3538186354959534e-7,1.354268419037624e-7,1.3474921354812282e-7,1.3593606915957412e-7,1.3485416304117928e-7,1.617606857057184e-7,1.343077215518603e-7,1.34297547876513e-7,1.3516098502595627e-7,1.342263321490818e-7,1.3392700655666603e-7,1.3551787220257393e-7,1.3481132651340114e-7,1.352805025677672e-7,1.3574980135134413e-7,1.3489626540526993e-7,1.3736647610616636e-7,1.3439923846904547e-7,1.3348837438738887e-7,1.3731981367022723e-7,1.3734327554301742e-7,1.341552552568567e-7,1.3450616210796889e-7,1.333225200915117e-7,1.3332731965635115e-7,1.33386516955796e-7,1.3587912295951833e-7,1.3506718590847763e-7,1.3460775556349557e-7,1.3387447804732372e-7,1.3427951332412527e-7,1.3477174069551026e-7,1.3389447890057968e-7,1.3381155041942863e-7,1.3417205640021972e-7,1.3508665081032653e-7,1.3639854786499357e-7,1.3616443575782462e-7,1.3478613939002863e-7,1.343557757429993e-7,1.3378035058154727e-7,1.3392434019315582e-7,1.343459073044044e-7,1.3347770868774565e-7,1.3600039864037058e-7,1.3376133932534103e-7,1.3447331899999733e-7,1.339138883647506e-7,1.3470958517483038e-7,1.3396145944897271e-7,1.3425193805660162e-7,1.347951599743807e-7,1.3377569037868178e-7,1.3386312549996145e-7,1.3319366746483326e-7,1.3460062081593712e-7,1.3445445002245676e-7,1.342832977657536e-7,1.3428967601168282e-7,1.3346288791030059e-7,1.4814182029823616e-7,1.3432768238461354e-7,1.3536761551933539e-7,1.361614520076858e-7,1.344050186165053e-7,1.3586246641454878e-7,1.352831011031708e-7,1.3585396474424563e-7,1.3678679384180356e-7,1.3657179114433706e-7,1.368776838462949e-7,1.3535007534303004e-7,1.3487940863029826e-7,1.349495666779172e-7,1.3506810903611415e-7,1.3495696278559262e-7,1.3610267647144806e-7,1.3530351946295171e-7,1.3537527738725786e-7,1.3518046981096473e-7,1.3434782701133999e-7,1.347268117540442e-7,1.5560214362215272e-7,1.3568037546607704e-7,1.3621509571355298e-7],\"variance\":1.6211423912350177e-17},\"times\":{\"cycle\":0.05109021428397142,\"elapsed\":5.596,\"period\":1.3577747969982757e-7,\"timeStamp\":1696975480307},\"running\":false,\"count\":376279,\"cycles\":5,\"hz\":7364991.618718859},\"1\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.9101393492559668e-10,\"rme\":0.2650263770683294,\"sem\":9.74560892477534e-11,\"deviation\":9.696758447105618e-10,\"mean\":7.207355623940377e-8,\"sample\":[8.111303269777685e-8,7.185010398382186e-8,7.196069201919357e-8,7.152838703506209e-8,7.216942277958378e-8,7.152738766751898e-8,7.152024932792532e-8,7.201237502551956e-8,7.153438324032077e-8,7.195412617443532e-8,7.142973232654193e-8,7.179093944832056e-8,7.138661675539622e-8,7.142202291978077e-8,7.158806355406507e-8,7.142759082466382e-8,7.231476222904648e-8,7.170227984289942e-8,7.205306498887132e-8,7.169842513951885e-8,7.206891210276924e-8,7.17726652989608e-8,7.159349011982417e-8,7.181064126559905e-8,7.144329659943778e-8,7.212487811285144e-8,7.169542703688951e-8,7.241113124122876e-8,7.1856756367042e-8,7.183862641214203e-8,7.231090609799799e-8,7.166872964680924e-8,7.236544444016145e-8,7.184690545840275e-8,7.234674199042606e-8,7.181278276747715e-8,7.245867401059044e-8,7.201037771810126e-8,7.185404379799641e-8,7.22687898943954e-8,7.195241297293285e-8,7.216856617883253e-8,7.177195146500144e-8,7.233860428328929e-8,7.184119478672783e-8,7.202622340433126e-8,7.250493045115734e-8,7.168243525882906e-8,7.225080127861939e-8,7.196940079349783e-8,7.250021914702552e-8,7.192642798914401e-8,7.258702278415232e-8,7.160933723372209e-8,7.181749549927688e-8,7.235473693077097e-8,7.18210632414058e-8,7.206577123334804e-8,7.183876775126599e-8,7.222781439745989e-8,7.234631369005044e-8,7.191086640882984e-8,7.251892302442883e-8,7.193171036044332e-8,7.235102499418226e-8,7.16565930418321e-8,7.21692800127919e-8,7.171641375529487e-8,7.21144561370447e-8,7.190744000582488e-8,7.185318719724518e-8,7.202279842899423e-8,7.155722592702047e-8,7.227964017057776e-8,7.175125028017984e-8,7.211973708067609e-8,7.181535399739879e-8,7.194327589825297e-8,7.176781265570503e-8,7.170099636944049e-8,7.227735590190779e-8,7.18397671188091e-8,7.228392317433395e-8,7.181963700115498e-8,7.26546956711681e-8,7.228992080726055e-8,7.244253993544086e-8,7.229891368748064e-8,7.182392000491119e-8,7.24892261040513e-8,7.196126451402898e-8,7.244025566677088e-8,7.195098387734619e-8,7.276177219274087e-8,7.189930229868811e-8,7.19765405607594e-8,7.207790641065725e-8,7.180378988725706e-8,7.195799800983092e-8],\"variance\":9.402712438151417e-19},\"times\":{\"cycle\":0.05048341795299669,\"elapsed\":5.479,\"period\":7.207355623940377e-8,\"timeStamp\":1696975485917},\"running\":false,\"count\":700443,\"cycles\":4,\"hz\":13874714.280482305},\"options\":{},\"events\":{\"start\":[null],\"cycle\":[null,null],\"complete\":[null,null]},\"length\":2,\"running\":false},\"type\":\"cycle\",\"target\":{\"name\":\"Date.now()\",\"options\":{\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05},\"async\":false,\"defer\":false,\"delay\":0.005,\"initCount\":1,\"maxTime\":5,\"minSamples\":5,\"minTime\":0.05,\"id\":2,\"stats\":{\"moe\":1.9101393492559668e-10,\"rme\":0.2650263770683294,\"sem\":9.74560892477534e-11,\"deviation\":9.696758447105618e-10,\"mean\":7.207355623940377e-8,\"sample\":[8.111303269777685e-8,7.185010398382186e-8,7.196069201919357e-8,7.152838703506209e-8,7.216942277958378e-8,7.152738766751898e-8,7.152024932792532e-8,7.201237502551956e-8,7.153438324032077e-8,7.195412617443532e-8,7.142973232654193e-8,7.179093944832056e-8,7.138661675539622e-8,7.142202291978077e-8,7.158806355406507e-8,7.142759082466382e-8,7.231476222904648e-8,7.170227984289942e-8,7.205306498887132e-8,7.169842513951885e-8,7.206891210276924e-8,7.17726652989608e-8,7.159349011982417e-8,7.181064126559905e-8,7.144329659943778e-8,7.212487811285144e-8,7.169542703688951e-8,7.241113124122876e-8,7.1856756367042e-8,7.183862641214203e-8,7.231090609799799e-8,7.166872964680924e-8,7.236544444016145e-8,7.184690545840275e-8,7.234674199042606e-8,7.181278276747715e-8,7.245867401059044e-8,7.201037771810126e-8,7.185404379799641e-8,7.22687898943954e-8,7.195241297293285e-8,7.216856617883253e-8,7.177195146500144e-8,7.233860428328929e-8,7.184119478672783e-8,7.202622340433126e-8,7.250493045115734e-8,7.168243525882906e-8,7.225080127861939e-8,7.196940079349783e-8,7.250021914702552e-8,7.192642798914401e-8,7.258702278415232e-8,7.160933723372209e-8,7.181749549927688e-8,7.235473693077097e-8,7.18210632414058e-8,7.206577123334804e-8,7.183876775126599e-8,7.222781439745989e-8,7.234631369005044e-8,7.191086640882984e-8,7.251892302442883e-8,7.193171036044332e-8,7.235102499418226e-8,7.16565930418321e-8,7.21692800127919e-8,7.171641375529487e-8,7.21144561370447e-8,7.190744000582488e-8,7.185318719724518e-8,7.202279842899423e-8,7.155722592702047e-8,7.227964017057776e-8,7.175125028017984e-8,7.211973708067609e-8,7.181535399739879e-8,7.194327589825297e-8,7.176781265570503e-8,7.170099636944049e-8,7.227735590190779e-8,7.18397671188091e-8,7.228392317433395e-8,7.181963700115498e-8,7.26546956711681e-8,7.228992080726055e-8,7.244253993544086e-8,7.229891368748064e-8,7.182392000491119e-8,7.24892261040513e-8,7.196126451402898e-8,7.244025566677088e-8,7.195098387734619e-8,7.276177219274087e-8,7.189930229868811e-8,7.19765405607594e-8,7.207790641065725e-8,7.180378988725706e-8,7.195799800983092e-8],\"variance\":9.402712438151417e-19},\"times\":{\"cycle\":0.05048341795299669,\"elapsed\":5.479,\"period\":7.207355623940377e-8,\"timeStamp\":1696975485917},\"running\":false,\"count\":700443,\"cycles\":4,\"hz\":13874714.280482305},\"aborted\":false}]"}-->
