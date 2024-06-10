Search.setIndex({"docnames": ["Tugas3", "Tugas4", "Tugas5", "Tugas6", "intro", "tugas1_aljabar_linear", "tugas2_matriks"], "filenames": ["Tugas3.ipynb", "Tugas4.ipynb", "Tugas5.ipynb", "Tugas6.ipynb", "intro.md", "tugas1_aljabar_linear.ipynb", "tugas2_matriks.ipynb"], "titles": ["Matriks Invers", "Determinan matriks", "Transformasi Matriks", "PageRank", "Welcome to your Jupyter Book", "Aljabar Linear", "Aljabar Matriks"], "terms": {"sifat": 0, "linear": 0, "operasi": [0, 2, 5], "dilakukan": 0, "pada": [0, 2, 3, 6], "untuk": [0, 1, 2, 3, 5, 6], "mendapatkan": 0, "dikalikan": 0, "asal": [0, 2], "akan": [0, 1, 3, 6], "menghasilkan": 0, "identita": [0, 1, 2], "di": [0, 1, 2, 3, 6], "mana": [0, 1, 2, 3], "semua": [0, 3], "elemen": [0, 1, 6], "diagon": [0, 1], "utamanya": [0, 1], "1": [0, 1, 2, 3, 5, 6], "sedangkan": 0, "lainnya": [0, 3, 6], "0": [0, 1, 2, 3, 5, 6], "ab": [0, 5], "ba": 0, "i": [0, 1, 2, 3, 4, 5, 6], "maka": [0, 1, 3, 6], "disebut": 0, "dari": [0, 1, 2, 3, 6], "dituli": 0, "sebagai": [0, 1, 3], "memiliki": [0, 3, 6], "nonsingular": 0, "atau": [0, 1, 2, 3, 6], "regular": 0, "namun": 0, "tidak": [0, 2, 3, 6], "singular": 0, "non": [0, 6], "invert": 0, "2": [0, 1, 2, 3, 5, 6], "3": [0, 1, 2, 3, 5, 6], "metod": [0, 3], "khusu": 0, "menghitung": [0, 3], "inversnya": 0, "pencarian": [0, 3], "biasanya": [0, 2, 3], "melibatkan": 0, "teknik": 0, "seperti": [0, 2], "dekomposisi": 0, "lu": 0, "rumu": [0, 2], "begin": [0, 1, 2, 3, 6], "bmatrix": [0, 1, 6], "c": [0, 1, 3, 6], "d": [0, 1, 3], "end": [0, 1, 2, 3, 6], "frac": [0, 3], "det": [0, 1], "left": [0, 3], "right": [0, 3], "matrix": [0, 1, 2, 5, 6], "ad": [0, 5], "bc": 0, "invertibel": 0, "ka": 0, "k": [0, 1, 2, 3, 5, 6], "t": [0, 2, 3], "keduanya": 0, "2x": [0, 1], "3y": 0, "4x": [0, 1], "5y": 0, "11": [0, 1, 5, 6], "ubah": 0, "dalam": [0, 1, 2, 3, 5, 6], "4": [0, 1, 2, 5, 6], "5": [0, 1, 2, 5, 6], "x": [0, 1, 2, 5], "y": [0, 2, 5], "langkah": [0, 1], "pertama": [0, 1, 6], "ke": [0, 1, 2, 3, 6], "dua": [0, 1, 6], "tiga": [0, 5], "empat": 0, "import": [0, 1, 2, 3, 5, 6], "numpi": [0, 1, 2, 3, 5, 6], "np": [0, 1, 2, 3, 5, 6], "arrai": [0, 1, 2, 3, 5, 6], "ai": 0, "linalg": [0, 1, 3, 5], "inv": [0, 1], "invers": 0, "q": 0, "dot": [0, 3, 6], "print": [0, 1, 2, 3, 5, 6], "contoh": [0, 1, 2, 3], "menggunakan": [0, 1, 2, 3, 5], "ordo": [0, 1, 6], "3x3": [0, 1, 2, 5, 6], "kemudian": [0, 3], "gunakan": 0, "elimin": [0, 5], "gimana": 0, "caranya": [0, 6], "identitasnya": 0, "bisa": [0, 2, 6], "disebelah": 0, "kiri": 0, "terserah": 0, "bari": [0, 1, 5, 6], "berapa": 0, "mau": 0, "tambahin": 0, "dikurangin": 0, "dikali": 0, "dibagi": [0, 3], "manapun": 0, "kita": [0, 1, 3, 6], "kalikan": [0, 6], "dikurangi": 0, "ketiga": 0, "15": [0, 1, 5], "diata": [0, 5], "tambahkan": [0, 1], "kali": [0, 1], "kedua": [0, 6], "selanjutnya": 0, "kurangkan": [0, 6], "juga": [0, 6], "16": [0, 1, 6], "12": [0, 1, 6], "20": [0, 1, 6], "terakhir": 0, "tinggal": 0, "hasilnya": [0, 6], "24": [0, 1], "18": [0, 1, 5], "nah": 0, "kanan": 0, "jadi": [0, 3, 6], "matriknya": 0, "def": [0, 1, 2, 3, 5, 6], "gauss_jordan_invers": 0, "len": [0, 1, 5, 6], "augmented_matrix": 0, "concaten": 0, "ident": 0, "axi": [0, 1], "rang": [0, 1, 3, 5, 6], "pivot": 0, "j": [0, 1, 5, 6], "ratio": 0, "return": [0, 1, 2, 3, 5, 6], "7": [0, 1, 5, 6], "inverse_matrix": 0, "25": [0, 3, 5], "6875": 0, "0625": 0, "75": 0, "tuga": [0, 5], "variabel": [0, 5], "rowscal": [0, 5], "scale": [0, 2, 5], "rowswap": [0, 5], "rowadd": [0, 5], "printmatrix": 0, "row": [0, 5, 6], "reducetoident": 0, "10": [0, 1, 2, 5, 6], "30": [0, 1, 5], "40": 0, "50": 0, "60": [0, 1], "awal": [0, 3], "enumer": 0, "f": [0, 1, 2], "x_": 0, "28": [0, 1], "22": [0, 1, 6], "42": 0, "x_1": [0, 5], "x_2": [0, 5], "x_3": [0, 5], "x_4": 0, "x_5": 0, "x_6": 0, "l": [0, 1, 5], "m": [0, 5], "shape": [0, 1, 3, 5], "copi": [0, 3, 5], "astyp": [0, 5], "float64": [0, 5], "temp": [0, 5], "x1": [0, 1, 5], "x2": [0, 1, 5], "x3": [0, 1, 5], "x4": 0, "x5": 0, "x6": 0, "2x2": [0, 2], "2x5": 0, "13": [0, 1, 5, 6], "2x1": [0, 5], "4x2": 0, "3x4": 0, "2x3": [0, 6], "2x4": 0, "3x5": 0, "3x6": 0, "a1": [0, 5], "a2": [0, 1, 5], "a3": [0, 5], "a4": [0, 5], "a5": [0, 5], "a6": [0, 5], "a7": [0, 5], "a8": 0, "a9": 0, "a10": 0, "a11": 0, "a12": 0, "8": [0, 1, 5, 6], "9": [0, 5, 6], "a13": 0, "a14": 0, "a15": 0, "a16": 0, "a17": 0, "a18": 0, "a19": 0, "a20": 0, "a21": 0, "a22": 0, "a23": 0, "a24": 0, "a25": 0, "a26": 0, "a27": 0, "14": [0, 1], "a28": 0, "33333333": [0, 1], "66666667": [0, 1], "a29": 0, "a30": 0, "a31": 0, "a32": 0, "hasil": [0, 1, 2, 6], "konstanta": 0, "23": 0, "17": 0, "19": [0, 5, 6], "bukti": 0, "00000004": 0, "99999996": 0, "matriksnya": 1, "haru": 1, "sama": [1, 3, 6], "determinana": 1, "adalah": [1, 2, 3, 6], "satu": [1, 2, 3, 6], "secara": [1, 3], "keseluruhan": 1, "merubah": 1, "mempengaruhi": 1, "tanda": 1, "jika": [1, 3, 6], "ada": [1, 6], "kolom": [1, 6], "yang": [1, 2, 3, 6], "merupakan": 1, "lain": [1, 2, 3], "determinannya": 1, "kelipatan": 1, "kelipatannya": 1, "pangkat": 1, "pertaman": 1, "misal": 1, "mat1": 1, "mat": 1, "rumusnya": [1, 2], "2dikali": 1, "barisnya": 1, "matrikx": 1, "matrtik": 1, "misalkan": [1, 6], "punya": [1, 6], "\ud835\udc34": 1, "sekarang": 1, "gandakan": 1, "\ud835\udc342": 1, "6": [1, 2, 3, 5, 6], "dengan": [1, 2, 3, 5, 6], "ini": [1, 2, 3], "menunjukkan": [1, 3], "bahwa": [1, 3], "ketika": 1, "menggandakan": 1, "A": [1, 3, 5, 6], "faktor": [1, 2, 3], "skalar": 1, "hal": 1, "menjadi": [1, 2, 3, 6], "lipat": 1, "kolomnya": [1, 6], "amaka": 1, "pengurangan": [1, 6], "ke2": 1, "ke1": 1, "mat2": 1, "tipe": 1, "segitiga": 1, "ata": [1, 3], "bawah": 1, "makan": 1, "b": [1, 5, 6], "e": 1, "g": [1, 5], "h": 1, "z": [1, 5], "n_arrai": 1, "det1": 1, "ndetermin": 1, "given": [1, 5], "float": [1, 3], "det11": 1, "kxjsk": 1, "9999999999999996": 1, "definisikan": 1, "ingin": 1, "diinver": 1, "cari": 1, "a_invers": 1, "ninver": 1, "5x5": 1, "tentukan": 1, "diberikan": [1, 3], "time": 1, "ekspansi": 1, "kofaktor": 1, "terhadap": [1, 2], "a_": 1, "c_": 1, "sesuai": [1, 5, 6], "langkahnya": 1, "berikut": [1, 5], "hitung": [1, 5], "m_": 1, "ij": 1, "minor": 1, "setelah": [1, 2, 6], "menghapu": 1, "mase": [1, 3, 5], "150": 1, "134": 1, "44": 1, "100": [1, 3, 5], "84": 1, "74": 1, "utama": 1, "176": 1, "72": 1, "222": 1, "252": 1, "minor_matrix": 1, "delet": 1, "determin": 1, "basi": 1, "kasu": 1, "1x1": 1, "cofactor": 1, "det_a": 1, "228": 1, "evalu": 1, "evect": 1, "eig": 1, "innnnni": 1, "89442719": 1, "70710678": 1, "4472136": 1, "mengubah": 2, "set": 2, "data": [2, 5], "vektor": 2, "melalui": [2, 3], "penggunaan": [2, 3], "kontek": 2, "aljabar": 2, "linier": 2, "sere": 2, "digunakan": [2, 3], "melakukan": 2, "berbagai": 2, "geometri": 2, "rotasi": 2, "skala": 2, "dan": [2, 3, 6], "translasi": 2, "ruang": [2, 5], "euclidean": 2, "jeni": 2, "dinotasikan": 2, "pmatrix": [2, 3], "memperbesar": 2, "memperkecil": 2, "tertentu": 2, "": [2, 5], "s_x": 2, "s_y": 2, "sepanjang": 2, "sumbu": [2, 5], "rotat": 2, "memutar": 2, "sebesar": 2, "sudut": 2, "titik": [2, 5], "r": [2, 5], "theta": 2, "co": 2, "sin": 2, "translat": 2, "mengges": 2, "posisi": [2, 6], "direpresentasikan": 2, "biasa": [2, 6], "tetapi": 2, "homogen": 2, "t_x": 2, "t_y": 2, "jarak": 2, "refleksi": 2, "reflect": 2, "mencerminkan": 2, "f_x": 2, "f_y": 2, "geser": 2, "shear": 2, "bentuk": 2, "menggesernya": 2, "horizont": [2, 6], "sh_x": 2, "k_x": 2, "vertik": [2, 6], "sh_y": 2, "k_y": 2, "sangat": [2, 3], "berguna": 2, "bidang": [2, 5], "grafika": 2, "komput": 2, "pemrosesan": 2, "citra": 2, "robotika": 2, "banyak": [2, 3], "lagi": 2, "misalnya": [2, 6], "memanipulasi": 2, "objek": 2, "2d": 2, "3d": [2, 5], "implementasi": [2, 3], "python": 2, "v": 2, "90": 2, "derajat": 2, "radian": 2, "menerapkan": 2, "v_rotat": 2, "asli": 2, "matplotlib": [2, 5], "pyplot": [2, 5], "plt": [2, 5], "fungsi": [2, 5], "menggambar": [2, 5], "grid": [2, 5], "draw_axes_and_grid": 2, "ax": [2, 5], "lim": 2, "axhlin": 2, "color": [2, 5], "grei": 2, "linewidth": 2, "axvlin": 2, "set_xlim": 2, "set_ylim": 2, "set_aspect": 2, "equal": 2, "adjust": 2, "box": 2, "which": 2, "both": 2, "linestyl": 2, "transform_and_plot": 2, "point": 2, "blue": 2, "label": [2, 5], "transform": 2, "transformed_point": 2, "scatter": [2, 5], "definisi": 2, "himpunan": 2, "koordinat": 2, "theta_degre": 2, "45": 2, "rotation_matrix": 2, "plot": [2, 5], "fig": [2, 5], "subplot": 2, "red": 2, "ori": 2, "legend": [2, 5], "show": [2, 4, 5], "transfor": 2, "reflection_matrix": 2, "ulangi": 2, "gari": 2, "reflection_matrix_i": 2, "green": 2, "reflection_matrix_yx": 2, "purpl": 2, "tranformasi": 2, "shearing_matrix_x": 2, "shearing_matrix_i": 2, "origin": 2, "transformed_points_x": 2, "transformed_points_i": 2, "algoritma": 3, "dikembangkan": 3, "oleh": 3, "larri": 3, "page": [3, 4], "sergei": 3, "brin": 3, "pendiri": 3, "googl": 3, "bagian": 3, "proyek": 3, "penelitian": 3, "mereka": 3, "stanford": 3, "univers": 3, "akhir": 3, "1990": 3, "an": 3, "mengukur": 3, "pentingnya": 3, "halaman": 3, "web": 3, "berdasarkan": 3, "jumlah": [3, 6], "kualita": 3, "tautan": 3, "menuju": 3, "tersebut": 3, "menilai": 3, "sebuah": [3, 6], "lebih": 3, "pent": 3, "menautkan": 3, "suara": 3, "setiap": 3, "dianggap": 3, "ditautkan": 3, "bobot": 3, "tinggi": 3, "memberikan": 3, "besar": 3, "daripada": 3, "rendah": 3, "distribusi": 3, "total": 3, "merata": 3, "antara": 3, "keluar": 3, "dimiliki": 3, "menerima": 3, "iterasi": 3, "dihitung": 3, "mulai": 3, "ulang": 3, "nilai": [3, 5], "diterima": 3, "teru": 3, "mengulangi": 3, "prose": 3, "hingga": 3, "konvergensi": 3, "saat": 3, "perubahan": 3, "kecil": 3, "stabil": 3, "pr": 3, "sum_": 3, "n": [3, 5, 6], "t_i": 3, "damp": 3, "sekitar": 3, "85": 3, "memperhitungkan": 3, "kemungkinan": 3, "pengguna": 3, "internet": 3, "melompat": 3, "acak": 3, "mengikuti": 3, "sum": 3, "penjumlahan": [3, 6], "berpengaruh": 3, "keberhasilan": 3, "mesin": 3, "pencari": 3, "karena": 3, "memungkinkan": 3, "menyusun": 3, "peringkat": 3, "relevansi": 3, "otorita": 3, "matemati": 3, "meskipun": 3, "jauh": 3, "komplek": 3, "selain": [3, 6], "konsep": 3, "masih": 3, "penilaian": 3, "agar": 3, "paham": 3, "node": 3, "mempunyai": 3, "sisi": 3, "sehingga": 3, "meneruskan": 3, "kepentingannya": 3, "hanya": 3, "seluruh": 3, "umum": 3, "terhubung": 3, "dengannya": 3, "mari": 3, "memvisualisasikan": 3, "prosesnya": 3, "baik": 3, "nyatakan": 3, "matrik": 3, "code": 3, "peringkat_halaman": 3, "matriks_adjac": 3, "toleransi": 3, "1e": 3, "maks_iterasi": 3, "kuasa": 3, "paramet": 3, "ndarrai": 3, "adjac": 3, "mewakili": 3, "graf": 3, "redaman": 3, "default": 3, "menentukan": 3, "int": 3, "maksimum": 3, "inisialisasi": 3, "skor": 3, "p": 3, "ones": 3, "_": [3, 6], "p_sebelumnya": 3, "baru": [3, 6], "memeriksa": 3, "norm": 3, "break": 3, "__name__": 3, "__main__": 3, "thi": 4, "small": 4, "sampl": 4, "give": 4, "you": 4, "feel": 4, "how": 4, "content": 4, "structur": 4, "It": 4, "off": 4, "few": 4, "major": 4, "file": 4, "type": 4, "well": 4, "some": 4, "doe": 4, "go": 4, "depth": 4, "ani": 4, "particular": 4, "topic": 4, "check": 4, "out": 4, "document": 4, "more": 4, "inform": 4, "bundl": 4, "see": 4, "persamaan": 5, "penyelesaian": 5, "sistem": 5, "persamaaan": 5, "elominasi": 5, "gauss": 5, "selesaikan": 5, "persmaan": 5, "beikut": 5, "8x_1": 5, "9x_2": 5, "2x_2": 5, "3x_3": 5, "2x_1": 5, "mendifinisikan": 5, "eliminasi": 5, "rosswap": 5, "hfielhfi": 5, "bdjakkusdh": 5, "dgyahdqklw": 5, "gauss_elimin": 5, "perform": 5, "gaussian": 5, "max_row": 5, "factor": 5, "solut": 5, "duplic": 5, "swap": 5, "number": 5, "column": 5, "entri": 5, "multipli": 5, "modif": 5, "The": 5, "new": 5, "valu": 5, "old": 5, "65": 5, "34": 5, "68": 5, "round": 5, "from": 5, "mpl_toolkit": 5, "mplot3d": 5, "axes3d": 5, "koefisien": 5, "b1": 5, "c1": 5, "r1": 5, "b2": 5, "c2": 5, "r2": 5, "27": 5, "b3": 5, "c3": 5, "r3": 5, "buat": [5, 6], "linspac": 5, "meshgrid": 5, "z1": 5, "z2": 5, "z3": 5, "dimensi": 5, "figur": 5, "add_subplot": 5, "111": 5, "project": 5, "plot_surfac": 5, "alpha": 5, "rstride": 5, "cstride": 5, "perpotongan": 5, "intersect": 5, "solv": 5, "black": 5, "set_xlabel": 5, "set_ylabel": 5, "set_zlabel": 5, "tampilkan": 5, "legenda": 5, "membuat": [5, 6], "soal": 5, "5x2": 5, "6x1": 5, "8x2": 5, "5x3": 5, "3x1": 5, "3x2": [5, 6], "4x3": 5, "21": 5, "39": 5, "33": 5, "mengerjakan": 6, "boleh": 6, "masuk": 6, "berikan": 6, "penjelasan": 6, "perkalian": 6, "transpos": 6, "program": 6, "mengalikan": 6, "tanpa": 6, "kumpulan": 6, "bilangan": 6, "simbol": 6, "ekspresi": 6, "sebut": 6, "membentuk": 6, "persegi": 6, "panjang": 6, "susun": 6, "menurut": 6, "sejajar": 6, "namai": 6, "huruf": 6, "kapit": 6, "seterusnya": 6, "indek": 6, "beberapa": 6, "dapat": 6, "lakukan": 6, "penjumlaham": 6, "berordo": 6, "jumlahkan": 6, "komponen": 6, "seletak": 6, "beri": 6, "nama": 6, "kurangankan": 6, "pembuatan": 6, "lama": 6, "asdalah": 6, "menukar": 6, "simpelnya": 6, "tranpos": 6, "kamu": 6, "contohnya": 6, "jumlahan": 6, "apabila": 6, "00000000e": 6, "00": 6, "11022302e": 6, "22044605e": 6, "tran": 6, "list": 6, "zip": 6, "transs": 6, "sebelum": 6, "sesudah": 6, "matruk": 6, "matrix_kali": 6, "matrix1": 6, "matrix2": 6, "eror": 6, "none": 6, "hasil_matrix": 6, "41": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"matrik": [0, 1, 2, 6], "inver": [0, 1], "jika": 0, "A": 0, "adalah": 0, "sebuah": 0, "persegi": 0, "berukuran": 0, "n": 0, "dan": [0, 1], "ada": 0, "b": 0, "yang": 0, "sama": 0, "sehingga": 0, "solusi": 0, "persamaan": 0, "sistem": 0, "linier": 0, "dengan": 0, "mencari": 0, "eliminasi": 0, "gauss": 0, "jordan": 0, "membuat": 0, "soal": 0, "6": 0, "variabl": 0, "determinan": 1, "formulasi": 1, "bentuk": 1, "menghitung": 1, "metrik": 1, "transformasi": 2, "pagerank": 3, "pengertian": 3, "prinsip": 3, "dasar": 3, "formula": 3, "sederhana": 3, "welcom": 4, "your": 4, "jupyt": 4, "book": 4, "aljabar": [5, 6], "linear": 5, "apa": 6, "itu": 6, "operasi": 6}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Matriks Invers": [[0, "matriks-invers"]], "Jika\nA adalah sebuah matriks persegi berukuran\n\u00d7\nn\u00d7n, dan jika ada sebuah matriks\nB berukuran yang sama sehingga": [[0, "jika-a-adalah-sebuah-matriks-persegi-berukuran-nn-dan-jika-ada-sebuah-matriks-b-berukuran-yang-sama-sehingga"]], "Solusi persamaan sistem linier dengan matrik invers": [[0, "solusi-persamaan-sistem-linier-dengan-matrik-invers"]], "Mencari matriks invers dengan eliminasi gauss jordan": [[0, "mencari-matriks-invers-dengan-eliminasi-gauss-jordan"]], "Membuat soal sistem persamaan linier 6 variable": [[0, "membuat-soal-sistem-persamaan-linier-6-variable"]], "Mencari invers dengan eliminasi gauss jordan": [[0, "mencari-invers-dengan-eliminasi-gauss-jordan"]], "Determinan matriks": [[1, "determinan-matriks"]], "formulasi bentuk determinan": [[1, "formulasi-bentuk-determinan"]], "menghitung determinan dan invers metriks": [[1, "menghitung-determinan-dan-invers-metriks"]], "Transformasi Matriks": [[2, "transformasi-matriks"]], "PageRank": [[3, "pagerank"]], "Pengertian PageRank": [[3, "pengertian-pagerank"]], "Prinsip Dasar PageRank": [[3, "prinsip-dasar-pagerank"]], "Formula Sederhana PageRank": [[3, "formula-sederhana-pagerank"]], "Welcome to your Jupyter Book": [[4, "welcome-to-your-jupyter-book"]], "Aljabar Linear": [[5, "aljabar-linear"]], "Aljabar Matriks": [[6, "aljabar-matriks"]], "Apa itu matriks?": [[6, "apa-itu-matriks"]], "Operasi Matriks": [[6, "operasi-matriks"]]}, "indexentries": {}})