import { ChevronDown, Users, Scale, CheckCircle, AlertCircle, TrendingUp, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Scale className="w-6 h-6 text-red-600" />
              <span className="font-bold text-lg text-gray-900">Dân chủ Cơ sở</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#story" className="text-gray-700 hover:text-red-600 transition-colors">Câu chuyện</a>
              <a href="#principles" className="text-gray-700 hover:text-red-600 transition-colors">Nguyên tắc</a>
              <a href="#implementation" className="text-gray-700 hover:text-red-600 transition-colors">Thực hiện</a>
              <a href="#flipbook" className="text-gray-700 hover:text-red-600 transition-colors">Học thuật</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-yellow-50 pt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZWYwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            <span>Tiếng nói của người dân từ thực tiễn địa phương</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            DÂN CHỦ CƠ SỞ<br />
            <span className="text-red-600">TIẾNG NÓI CỦA NGƯỜI DÂN</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
            Dân chủ không nằm trên giấy.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nó hiện diện trong từng cuộc họp khu phố, từng ý kiến của người dân và từng quyết định liên quan đến cuộc sống hằng ngày.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#story"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Khám phá câu chuyện dân chủ
            </a>
            <a
              href="#flipbook"
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-red-600"
            >
              Đọc Flipbook học thuật
            </a>
          </div>

          <div className="text-gray-600 mb-4">
            Ở Việt Nam, dân chủ được thực hiện từ những điều gần gũi nhất – nơi người dân trực tiếp tham gia bàn bạc, giám sát và quyết định những vấn đề của cộng đồng mình sinh sống.
          </div>

          <ChevronDown className="w-8 h-8 text-red-600 mx-auto animate-bounce" />
        </div>
      </section>

      <section id="story" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              CÂU CHUYỆN DÂN CHỦ
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Bản chất Dân chủ XHCN
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
              "Khi địa phương triển khai một dự án, người dân có quyền gì trong quyết định đó?"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dân chủ XHCN là gì?</h3>
              <p className="text-gray-700 leading-relaxed">
                Dân chủ xã hội chủ nghĩa ở Việt Nam là nền dân chủ của đại đa số Nhân dân, trong đó quyền lực nhà nước thuộc về Nhân dân. Mọi hoạt động của Nhà nước đều hướng tới phục vụ lợi ích của Nhân dân và chịu sự giám sát của Nhân dân.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nhân dân là chủ thể quyền lực</h3>
              <p className="text-gray-700 leading-relaxed">
                Nhân dân không chỉ là người thụ hưởng, mà còn là người trực tiếp tham gia xây dựng, giám sát và đánh giá hiệu quả của các chính sách, quyết định ở cơ sở.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vừa là mục tiêu, vừa là động lực</h3>
              <p className="text-gray-700 leading-relaxed">
                Thực hiện dân chủ không chỉ nhằm bảo đảm quyền con người, quyền công dân mà còn tạo động lực thúc đẩy phát triển kinh tế – xã hội và củng cố niềm tin của Nhân dân đối với Đảng và Nhà nước.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NGUYÊN TẮC VẬN HÀNH
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Đảng – Nhà nước – Nhân dân
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nguyên tắc "Đảng lãnh đạo – Nhà nước quản lý – Nhân dân làm chủ"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-600 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Đảng lãnh đạo</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Đảng Cộng sản Việt Nam lãnh đạo bằng đường lối, chủ trương, nghị quyết; thông qua công tác tư tưởng, tổ chức, cán bộ và kiểm tra, giám sát nhằm bảo đảm mọi hoạt động đi đúng định hướng xã hội chủ nghĩa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-600 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Nhà nước quản lý</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Nhà nước thực hiện quản lý xã hội bằng Hiến pháp và pháp luật; tổ chức bộ máy chính quyền, cung cấp dịch vụ công, bảo đảm trật tự, an toàn xã hội và quyền lợi hợp pháp của Nhân dân.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-600 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Nhân dân làm chủ</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Nhân dân là chủ thể của quyền lực nhà nước, trực tiếp hoặc gián tiếp tham gia quyết định, giám sát và phản biện các vấn đề liên quan đến quyền và lợi ích của mình.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-8 rounded-2xl text-white text-center">
            <p className="text-xl font-semibold leading-relaxed">
              Ba yếu tố này không tách rời mà gắn bó chặt chẽ, tạo thành cơ chế vận hành thống nhất của nền dân chủ xã hội chủ nghĩa ở Việt Nam.
            </p>
          </div>
        </div>
      </section>

      <section id="implementation" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              QUY TRÌNH THỰC HIỆN
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Dân chủ cơ sở được thực hiện như thế nào?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-2xl border-l-4 border-red-600 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cơ sở pháp lý</h3>
              <p className="text-gray-700 leading-relaxed">
                Việc thực hiện dân chủ ở cơ sở được bảo đảm bằng Hiến pháp năm 2013 và đặc biệt là Luật Thực hiện dân chủ ở cơ sở năm 2022, tạo hành lang pháp lý rõ ràng cho quyền làm chủ của Nhân dân.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-white p-8 rounded-2xl border-l-4 border-yellow-600 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dân chủ trực tiếp</h3>
              <p className="text-gray-700 leading-relaxed">
                Người dân trực tiếp tham gia họp dân, bàn bạc và quyết định các vấn đề như mức đóng góp xây dựng công trình công cộng, bầu Trưởng thôn, Tổ trưởng tổ dân phố, thông qua hương ước, quy ước cộng đồng.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-2xl border-l-4 border-red-600 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dân chủ đại diện</h3>
              <p className="text-gray-700 leading-relaxed">
                Thông qua việc bầu cử đại biểu HĐND, hoạt động của Mặt trận Tổ quốc và các đoàn thể, Nhân dân thực hiện quyền làm chủ gián tiếp, giám sát hoạt động của chính quyền cơ sở.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 p-10 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-6 text-center">Cơ chế 6 chữ DÂN</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {['Dân biết', 'Dân bàn', 'Dân làm', 'Dân kiểm tra', 'Dân giám sát', 'Dân thụ hưởng'].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center font-semibold text-lg">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-lg">
                Mô hình cốt lõi bảo đảm quyền làm chủ của Nhân dân trong mọi quyết định liên quan đến cộng đồng
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              THÀNH QUẢ
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ưu điểm của Dân chủ cơ sở hiện nay
            </h2>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Việc thực hiện dân chủ ở cơ sở đã góp phần nâng cao nhận thức pháp luật của người dân, tăng cường sự tham gia của Nhân dân vào quản lý xã hội, hạn chế tiêu cực, tham nhũng và thúc đẩy phát triển kinh tế – xã hội bền vững.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Giám sát tốt hơn</h4>
                  <p className="text-gray-600">Công trình công cộng được giám sát chặt chẽ</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Khiếu kiện giảm</h4>
                  <p className="text-gray-600">Giải quyết tranh chấp hiệu quả hơn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Đồng thuận tăng</h4>
                  <p className="text-gray-600">Cộng đồng đoàn kết, phát triển bền vững</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NHÌN NHẬN THỰC TRẠNG
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Hạn chế & Thách thức
            </h2>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-orange-500">
            <div className="flex items-start space-x-4 mb-6">
              <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <p className="text-xl text-gray-700 leading-relaxed">
                Bên cạnh những kết quả tích cực, việc thực hiện dân chủ cơ sở ở một số nơi còn mang tính hình thức; việc công khai thông tin chưa đầy đủ; một bộ phận cán bộ còn ngại đối thoại, trong khi người dân còn e dè, thiếu kỹ năng tham gia giám sát.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <p className="text-lg text-gray-800 font-semibold italic">
                Nếu dân chủ chỉ dừng lại ở quy trình mà không đi vào thực chất, thì quyền làm chủ của Nhân dân sẽ không được phát huy đầy đủ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              HƯỚNG ĐI TƯƠNG LAI
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Giải pháp & Tầm nhìn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tăng cường vai trò lãnh đạo của Đảng</h3>
                  <p className="text-gray-700">Gắn với trách nhiệm nêu gương của cán bộ, đảng viên</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hoàn thiện pháp luật</h3>
                  <p className="text-gray-700">Cơ chế thực thi dân chủ minh bạch, hiệu quả</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Nâng cao năng lực Nhân dân</h3>
                  <p className="text-gray-700">Tăng nhận thức và kỹ năng làm chủ của người dân</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Chuyển đổi số</h3>
                  <p className="text-gray-700">Đẩy mạnh chính quyền số, công khai minh bạch</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tăng đối thoại và giám sát</h3>
                  <p className="text-gray-700">Khuyến khích giám sát từ cơ sở, đối thoại trực tiếp giữa chính quyền và người dân</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-10 rounded-2xl text-white text-center shadow-2xl">
            <p className="text-2xl font-bold leading-relaxed">
              Phát huy dân chủ cơ sở chính là nền tảng để xây dựng Nhà nước pháp quyền xã hội chủ nghĩa vững mạnh và xã hội ổn định, phát triển bền vững.
            </p>
          </div>
        </div>
      </section>

      <section id="flipbook" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TÀI LIỆU HỌC THUẬT
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Flipbook Chương 4
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Toàn bộ nội dung học thuật chi tiết của Chương 4 được trình bày đầy đủ trong Flipbook bên dưới
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl border border-white/20 text-center">
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
            <p className="text-xl text-gray-300 mb-8">
              Tài liệu Flipbook sẽ được tích hợp tại đây
            </p>
            <button className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg">
              Mở Flipbook
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Scale className="w-6 h-6 text-red-500" />
              <span className="font-bold text-lg">Dân chủ Cơ sở</span>
            </div>
            <p className="text-gray-400">
              Tiếng nói của người dân từ thực tiễn địa phương
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
