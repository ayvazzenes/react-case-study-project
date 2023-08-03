Projemde data.json isimli bir dosya vardır.

Bu dosyada veriler tutulur ve bu veriler App componentinde çağırılır.
Bu verilerin tabloda gösterilmesi için component adında bir klasör ve bu klasörün altında Grid.jsx dosyası oluşturulmuştur.

Bu dosya App componentinde çağırılır ve App componentinden data.jsondaki veriler props olarak geçilir ve Grid.jsx dosyasında ise tablo gösterimi yapılır.

Daha sonra App componentinde html sayfasına yansıtılan veriler Javascript fonksiyonları kullanılarak. tableDataya aktarılır. Tabledata verisine ek olarak arka plan renkleri datalist verisindeki verilerle karşılaştırılıp arka plan renkleri atanır.

Daha sonra tablodaki case ve çözüm gönderilen tarihler karşılaştırılır ve limit durumlarına control fonksiyonunda bakılır eğer bu fonksiyon belirlenen limit değerinden fazla ise kırmızıdır.

Kırmızı olmaması gerekip kırmızı olan verilerin ve kırmızı olması gerekip kırmızı olmayan verilerin sayısı count değişkeninde tutulur ve ekrana yazdırılır.
