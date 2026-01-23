// ============================================
// GAME "VƯƠNG QUỐC AURELIA - DÂN CHỦ CƠ SỞ"
// Mô phỏng dân chủ cơ sở trong bối cảnh fantasy trung cổ
// Áp dụng nguyên lý: "Quốc Chủ lãnh đạo, Hội đồng quản lý, Lãnh dân làm chủ"
// ============================================

import { Stage, Ending, EndingType } from '../types/game';

// ============================================
// 5 TÌNH HUỐNG DÂN CHỦ CƠ SỞ TRONG BỐI CẢNH TRUNG CỔ
// ============================================

export const stages: Stage[] = [
  // ========== TÌNH HUỐNG 1: Khai hoang vùng đất mới ==========
  {
    id: 1,
    title: "Khai hoang vùng đất hoang vu",
    period: "Năm 3 - Triều đại Minh Vương",
    context: `Lãnh địa Tân Phú (thuộc Bá tước Đông Nam) vừa được ban cho một vùng đất hoang rộng 200 mẫu Anh:

• Một Thương đoàn từ phương Tây muốn thuê đất xây nhà máy dệt, hứa trả 500 đồng vàng mỗi năm
• Nhưng trên vùng đất này có 150 gia đình nông nô đang khai hoang tự phát, trồng lúa mạch nuôi sống gia đình
• Thương đoàn cam kết tạo việc làm cho 2000 người, giúp Lãnh địa thịnh vượng
• Nhưng lãnh dân lo sợ mất đất canh tác, ô nhiễm từ nhà máy làm hỏng nguồn nước`,
    situation: `Bạn là Quản lý Lãnh địa được Bá tước bổ nhiệm. Bá tước giao nhiệm vụ nhanh chóng dọn dẹp vùng đất để cho Thương đoàn vào đầu tư - phải báo cáo hoàn thành trong vòng một tháng trăng.

Nhưng theo Sắc lệnh Hoàng gia (ban hành năm đầu triều đại), Điều 15 quy định: "Mọi quyết định ảnh hưởng đến sinh kế của lãnh dân phải được Hội đồng Lãnh dân bàn bạc và đồng ý". 

Cuộc họp Hội đồng Lãnh dân sẽ diễn ra tuần tới tại Đại sảnh làng. Một số cận vệ nói: "Cứ tổ chức cho có lệ, rồi làm theo lệnh Bá tước". Nhưng lãnh dân đang rất bức xúc, nhiều người yêu cầu được tham gia ý kiến thực sự.

Một già làng nói: "Nếu Ngài không lắng nghe tiếng nói của chúng tôi, tất cả sẽ từ bỏ đất đai và ra đi. Lãnh địa sẽ chỉ còn đất trống!" Áp lực từ hai phía đang đè nặng lên vai bạn.`,
    choices: [
      {
        id: 'A',
        text: "Triệu tập Hội đồng Trưởng thôn - Lấy ý kiến hình thức",
        description: `Họp nhanh với 30 trưởng thôn, già làng trong 1 buổi sáng. Trình bày kế hoạch với slides đẹp mắt, nhấn mạnh lợi ích kinh tế. Biểu quyết công khai (giơ tay) ngay sau đó. Lập biên bản "Hội đồng đồng ý 100%", hoàn thành đúng thủ tục theo quy định của Bá tước.`,
        effects: { economy: 10, trust: -18, happiness: -14 }
      },
      {
        id: 'B',
        text: "Tổ chức Đại hội Lãnh dân mở rộng - Dân chủ thực chất",
        description: `Xin gia hạn 3 tuần. Tổ chức 5 buổi họp tại 10 thôn, mời TẤT CẢ gia đình bị ảnh hưởng + Pháp sư + Thương đoàn + Ban Thanh tra. Công khai phương án đền bù/tuyển dụng/môi trường, lắng nghe ý kiến, điều chỉnh dựa trên nguyện vọng, bỏ phiếu BÍ MẬT.`,
        effects: { economy: -8, trust: 13, happiness: 11 }
      },
      {
        id: 'C',
        text: "Bỏ qua thủ tục - Cưỡng chế nhanh, làm giả biên bản",
        description: `Bỏ qua Hội đồng. Ra lệnh cưỡng chế di dời 150 gia đình trong 10 ngày. Làm giả biên bản "100% đồng ý", hối lộ 5 trưởng thôn để họ im lặng. Sử dụng vệ binh đàn áp người phản đối. Báo cáo với Bá tước: "Dự án hoàn thành sớm 2 tuần, dân đồng thuận cao".`,
        effects: { economy: 14, trust: -25, happiness: -20 }
      }
    ],
    historicalNote: `📜 CƠ SỞ LÝ THUYẾT:

Sắc lệnh Hoàng gia (ban hành năm đầu triều đại): "Quyền lực đến từ lòng tin của lãnh dân. Một Lãnh chủ không có sự ủng hộ của dân chúng chỉ là một kẻ ngồi trên ngai rỗng."

Học thuyết của Hiền triết Magnus: "Dân chủ không phải là cho dân quyền nói, mà là cho dân quyền QUYẾT ĐỊNH. Không phải là hỏi ý kiến rồi làm theo ý mình, mà là LẮNG NGHE và ĐIỀU CHỈNH."`
  },

  // ========== TÌNH HUỐNG 2: Phân bổ ngân khố Lãnh địa ==========
  {
    id: 2,
    title: "Phân bổ Ngân khố xây dựng",
    period: "Năm 5 - Triều đại Minh Vương",
    context: `Kỳ họp Hội đồng Lãnh địa sắp diễn ra để quyết định chi 500 đồng vàng từ ngân khố. Ba công trình cấp bách:

• Công trình A: Sửa đường liên Lãnh (chi phí 250 vàng) - Bá tước ưu tiên, để vận chuyển hàng hóa
• Công trình B: Xây Nhà thương mới (200 vàng) - Lãnh dân mong mỏi, nhà thương cũ sắp sập
• Công trình C: Sửa 3 trường học (150 vàng) - Nhiều lớp học dột nát, nguy hiểm cho học sinh

Vấn đề: Ngân khố chỉ đủ cho 2 trong 3 công trình. Phải lựa chọn ưu tiên.`,
    situation: `Bạn vừa là Đại biểu Hội đồng Lãnh địa (do lãnh dân bầu), vừa là thành viên Hội Kỵ sĩ (tổ chức lãnh đạo của Lãnh địa). Tại cuộc họp Hội Kỵ sĩ tuần trước, Đại trưởng đã ra lệnh: "Ưu tiên Công trình A để phục vụ thương mại, theo chỉ thị của Bá tước".

Nhưng qua cuộc thăm dò ý kiến do Ban Dân biểu tổ chức, có tới 480/600 gia đình (80%) mong muốn ưu tiên Công trình B và C (y tế + giáo dục). Nhiều già làng còn gửi thư đến Hội đồng, van xin: "Con cháu chúng tôi đang học trong nhà dột, bệnh nhân nằm sàn ướt. Xin hãy nghĩ đến chúng tôi!"

Tại phiên họp Hội đồng Lãnh địa ngày mai, bạn phải đưa ra phiếu bầu. Một số Đại biểu thì thầm: "Phải nghe lệnh Hội Kỵ sĩ, đó là kỷ luật". Nhưng cũng có người nói: "Đại biểu Hội đồng đại diện cho dân, phải theo tiếng nói của họ".

Một Lão nông đã tìm đến tận nhà bạn tối qua, quỳ xuống van xin: "Con trai tôi bị sốt rét nặng, nhà thương không còn giường. Nó đã chết... Xin Ngài đừng quên chúng tôi nữa."

Làm sao cân bằng giữa "Hội Kỵ sĩ lãnh đạo" và "Lãnh dân làm chủ"? Đây là thử thách lớn nhất về nguyên tắc quyền lực.`,
    choices: [
      {
        id: 'A',
        text: "Bỏ phiếu theo lệnh Hội Kỵ sĩ - Chọn Công trình A",
        description: `Tuân thủ kỷ luật Hội Kỵ sĩ. Phát biểu dài 30 phút về tầm quan trọng của đường giao thông và thương mại, nhấn mạnh lợi ích kinh tế. Thuyết phục Đại biểu rằng "khi kinh tế phát triển, tất cả sẽ tốt lên". Bỏ phiếu chọn Công trình A (sửa đường liên Lãnh).`,
        effects: { economy: 9, trust: -16, happiness: -13 }
      },
      {
        id: 'B',
        text: "Đề xuất phương án hoà giải - Cân bằng lợi ích",
        description: `Làm việc cả đêm chuẩn bị phương án mới. Công bố kết quả thăm dò (80% muốn y tế+giáo dục), đề xuất giải pháp thỏa hiệp: Năm nay ưu tiên B+C (350 vàng), 150 vàng xây 4km đường quan trọng nhất, đoạn còn lại năm sau.`,
        effects: { economy: -5, trust: 14, happiness: 11 }
      },
      {
        id: 'C',
        text: "Bỏ phiếu theo ý dân, bất chấp Hội Kỵ sĩ",
        description: `Phản đối công khai: "Tôi là Đại biểu do dân bầu, chỉ nghe dân!" Bỏ phiếu chọn B+C (y tế + giáo dục) theo nguyện vọng 80% dân, bất chấp lệnh Hội Kỵ sĩ.`,
        effects: { economy: 2, trust: -15, happiness: 12 }
      }
    ],
    historicalNote: `📜 CƠ SỞ LÝ THUYẾT:

Hiến chương Vương quốc Aurelia (ban hành thế kỷ thứ 13): "Hội Kỵ sĩ là lực lượng lãnh đạo Lãnh địa và xã hội, nhưng phải phục vụ lợi ích của toàn thể lãnh dân."

Học thuyết Hiền triết Sophia: "Lãnh đạo không phải là quyền ra lệnh, mà là TRÁCH NHIỆM PHỤC VỤ. Một nhà lãnh đạo thực sự là người LẮNG NGHE và ĐIỀU CHỈNH quyết định dựa trên lợi ích của người được lãnh đạo."`
  },

  // ========== TÌNH HUỐNG 3: Ban hành Luật Quản lý đất đai ==========
  {
    id: 3,
    title: "Ban hành Luật Đất đai mới",
    period: "Năm 7 - Triều đại Minh Vương",
    context: `Vương quốc Aurelia chuẩn bị ban hành Luật Quản lý đất đai - ảnh hưởng trực tiếp đến 5000 gia đình trong Lãnh địa:

• Luật mới quy định: Tất cả đất canh tác phải đăng ký quyền sở hữu với Văn phòng Lãnh địa
• Ai không đăng ký trong 6 tháng sẽ bị coi như đất vô chủ, có thể bị thu hồi
• Luật rất phức tạp, dài 150 trang, toàn thuật ngữ pháp lý khó hiểu
• 70% lãnh dân là nông nô không biết chữ, không hiểu nội dung`,
    situation: `Bạn là Thư ký Lãnh địa, phụ trách công bố Luật mới. Văn phòng Lãnh địa nhận được Bản Luật từ Hoàng gia, yêu cầu thực hiện ngay.

Một số Quan lại nói: "Chỉ cần dán Thông báo lên cổng Đại sảnh, đọc to một lần là đủ. Ai không biết chữ thì tự lo." Họ lập luận: "Đã CÔNG KHAI thông tin, đã thực hiện đúng thủ tục."

Nhưng bà trưởng thôn già tìm đến văn phòng, lo lắng: "Dân tôi không hiểu Luật nói gì. Họ sợ mất đất, nhưng không biết phải làm thế nào. Nếu để vậy, 6 tháng sau hàng trăm gia đình sẽ vô gia cư!"

Thực tế cho thấy: Nhiều Lãnh địa khác CHỈ CÔNG BỐ HÌNH THỨC - dán thông báo xong việc. Kết quả: Sau 6 tháng, hàng nghìn gia đình bị thu hồi đất vì không kịp đăng ký. Một số Lãnh địa nổ ra bạo loạn nông dân.

Học thuyết Hiền triết Magnus: "DÂN BIẾT không chỉ là cho dân xem thông tin, mà là ĐẢM BẢO dân HIỂU được thông tin." Nhưng việc này tốn thời gian và nhân lực...`,
    choices: [
      {
        id: 'A',
        text: "Công bố hình thức - Dán thông báo, đọc một lần",
        description: `Dán Bản Luật dài 150 trang lên cổng Đại sảnh và 10 thôn. Tổ chức 1 buổi đọc công khai (30 phút) bằng thuật ngữ pháp lý phức tạp, không giải thích gì thêm. Lập biên bản "đã công bố đầy đủ theo quy định". Công việc hoàn tất trong 3 ngày.`,
        effects: { economy: 11, trust: -17, happiness: -11 }
      },
      {
        id: 'B',
        text: "Giải thích chi tiết - Tổ chức 10 buổi tuyên truyền tại thôn",
        description: `Viết Sách hướng dẫn đơn giản (20 trang) có tranh minh họa, in 500 bản phát miễn phí. Tổ chức 10 buổi họp (4 tuần): giải thích từng điều luật bằng ví dụ, dùng ma thuật hiển ảnh, giải đáp mọi câu hỏi. Lập 3 Bàn đăng ký lưu động hỗ trợ miễn phí.`,
        effects: { economy: -6, trust: 16, happiness: 10 }
      },
      {
        id: 'C',
        text: "Công bố chọn lọc - Chỉ thông báo cho quý tộc và trưởng thôn",
        description: `Gửi Bản Luật đầy đủ cho 30 trưởng thôn + 50 quý tộc. Họp kín giải thích chi tiết cho họ. Yêu cầu trưởng thôn "tự thông báo" nhưng KHÔNG kiểm tra. Nông nô (70% dân) chỉ nhận thông báo ngắn 5 dòng.`,
        effects: { economy: 8, trust: -25, happiness: -19 }
      }
    ],
    historicalNote: `📜 CƠ SỞ LÝ THUYẾT:

Học thuyết Hiền triết Magnus về "DÂN BIẾT":
"Công bố thông tin không bằng việc ĐẢM BẢO dân HIỂU được thông tin. Một Luật được công bố nhưng dân không hiểu chẳng khác nào Luật bí mật - chỉ phục vụ những người có đặc quyền."

Sắc lệnh Hoàng gia (ban hành giữa triều đại): "Mọi Luật ảnh hưởng đến quyền lợi của lãnh dân phải được GIẢI THÍCH bằng ngôn ngữ họ HIỂU ĐƯỢC, không được dùng thuật ngữ pháp lý phức tạp để che giấu ý nghĩa."`
  },

  // ========== TÌNH HUỐNG 4: Giám sát quan tham nhũng ==========
  {
    id: 4,
    title: "Xét xử quan tham nhũng",
    period: "Năm 10 - Triều đại Minh Vương",
    context: `Quan Thâu thuế Trường thôn Bắc bị phát hiện tham nhũng nghiêm trọng:

• Trong 3 năm, biển thủ 300 đồng vàng từ tiền thuế của lãnh dân
• Dùng tiền mua dinh thự lớn, nuôi 10 tùy tùng, sống xa hoa
• Đã bị 15 gia đình nông dân tố cáo nhiều lần, nhưng không bị xử lý vì có quan hệ với Đại trưởng Hội Kỵ sĩ
• Bằng chứng rõ ràng: Sổ sách ghi chép sai lệch, chứng từ giả mạo`,
    situation: `Bạn là Chánh Thanh tra Lãnh địa, vừa hoàn thành điều tra và có đầy đủ chứng cứ. Theo Luật Hoàng gia, trường hợp tham nhũng trên 100 đồng vàng phải chịu án: Truất phế chức vụ, tịch thu tài sản, tù giam 10 năm.

Nhưng Đại trưởng Hội Kỵ sĩ gọi bạn đến phòng riêng, nói nhỏ: "Quan Thâu thuế là anh họ của ta. Xin hãy khoan dung, chỉ cho nghỉ việc là đủ. Ta sẽ hậu tạ 50 đồng vàng."

Một số quan lại cũng thì thầm: "Đừng làm lớn chuyện. Nếu xử nặng, các quan khác sẽ bất mãn, có thể chống lại ngài". Họ đề xuất XỬ KÍN - chỉ truất chức, không công khai.

Nhưng 15 gia đình nông dân nộp Đơn kiến nghị, yêu cầu: "Phải XỬ CÔNG KHAI, để cảnh cáo các quan khác. Nếu không, chúng tôi sẽ kêu cứu lên Hoàng gia!" Một già làng nói: "Nếu không có công lý, dân sẽ không còn tin vào Lãnh địa nữa."

Đồng thời, lãnh dân gửi Kiến nghị thành lập Ban Giám sát do dân bầu, để có quyền KIỂM TRA hoạt động của quan lại thường xuyên - tránh tham nhũng tái diễn.

Một quyết định sai có thể phá hủy niềm tin cuối cùng của lãnh dân vào hệ thống công lý...`,
    choices: [
      {
        id: 'A',
        text: "Xử kín - Chỉ truất chức, không công khai",
        description: `Chấp nhận 50 vàng hối lộ. Họp KÍN với 5 quan cấp cao, KHÔNG mời dân. Quyết định: Truất chức, cho "nghỉ hưu danh dự", giữ 60% tài sản. Thông báo: "Nghỉ hưu vì sức khỏe". Giấu kín vụ tham nhũng.`,
        effects: { economy: 8, trust: -17, happiness: -15 }
      },
      {
        id: 'B',
        text: "Xử công khai - Cho dân giám sát phiên toà",
        description: `TỪ CHỐI hối lộ. Tổ chức phiên toà CÔNG KHAI: Mời 100 đại biểu dân (gồm 15 hộ bị hại) tham dự giám sát. Công bố chứng cứ, cho nạn nhân trình bày. Kết án: Tù 10 năm, tịch thu tài sản. Đề xuất thành lập Ban Giám sát 10 người do dân bầu.`,
        effects: { economy: -7, trust: 17, happiness: 13 }
      },
      {
        id: 'C',
        text: "Bao che - Xoá hồ sơ, không xử lý",
        description: `Nhận 50 vàng. Ra lệnh BÍ MẬT: "Tiêu hủy hồ sơ, xóa sổ sách, đốt chứng cứ". Gặp 15 hộ tố cáo, áp lực + trả 20 vàng "bịt miệng". Thông báo: "Không có sai phạm, phục chức". Chia 30 vàng cho 3 quan đồng lõa.`,
        effects: { economy: 10, trust: -28, happiness: -23 }
      }
    ],
    historicalNote: `📜 CƠ SỞ LÝ THUYẾT:

Học thuyết Hiền triết Magnus về "DÂN KIỂM TRA":
"Quyền lực không có giám sát tất yếu dẫn đến tham nhũng. Chỉ có khi người dân được quyền KIỂM TRA, GIÁM SÁT trực tiếp, quyền lực mới trong sạch."

Sắc lệnh Hoàng gia (ban hành cuối triều đại): "Mọi phiên toà xét xử quan chức phải CÔNG KHAI, có đại diện nhân dân tham dự. Việc xử kín là che giấu tội ác, đồng lõa với kẻ gian."`
  },

  // ========== TÌNH HUỐNG 5: Quyết định tương lai Lãnh địa ==========
  {
    id: 5,
    title: "Con đường tương lai của Lãnh địa",
    period: "Năm 15 - Triều đại Minh Vương",
    context: `Sau 15 năm cai trị, Lãnh địa đứng trước ngã rẽ lớn. Hoàng gia ban Sắc chỉ: "Các Lãnh địa được tự chọn mô hình quản lý trong 50 năm tới":

• Mô hình A: Quản lý tập trung - Bá tước nắm toàn quyền, quyết định mọi việc nhanh chóng, hiệu quả cao
• Mô hình B: Dân chủ đại diện - Hội đồng Lãnh dân bầu ra có quyền quyết định các chính sách lớn
• Mô hình C: Dân chủ trực tiếp - Tất cả quyết định lớn phải qua Đại hội Lãnh dân, mọi người đều được tham gia

Lãnh địa phải lựa chọn và báo cáo lên Hoàng gia trong tháng này.`,
    situation: `Bạn là Cố vấn Cấp cao của Bá tước, phụ trách tổ chức Hội nghị Đại biểu Lãnh địa để bàn bạc.

Bá tước nói riêng với bạn: "Ta muốn Mô hình A - quản lý tập trung. Quyền lực tập trung, làm việc hiệu quả. Ta sẽ đưa Lãnh địa thịnh vượng." Ông ta ra lệnh: "Hãy tổ chức Hội nghị sao cho kết quả là chọn Mô hình A."

Nhưng qua cuộc thăm dò ý kiến toàn Lãnh địa (5000 gia đình tham gia):
- Chọn Mô hình A: 15% (chủ yếu là quý tộc, thương nhân giàu)
- Chọn Mô hình B: 60% (đa số lãnh dân muốn có tiếng nói qua Hội đồng)
- Chọn Mô hình C: 25% (một số người muốn dân chủ hoàn toàn)

Một già làng nói: "Nếu không chọn theo ý dân, thì 15 năm qua chúng ta đã học được gì? Tất cả chỉ là trò lừa bịp?" Áp lực lớn từ cả hai phía.

Học thuyết Hiền triết Sophia: "Hệ thống chính trị tốt nhất không phải là hệ thống MẠNH NHẤT, mà là hệ thống có SỰ ỦNG HỘ của người dân. Một chế độ không được dân ủng hộ sẽ sụp đổ, dù có mạnh đến đâu."

Đây là quyết định CUỐI CÙNG và quan trọng nhất - định hình tương lai 50 năm.`,
    choices: [
      {
        id: 'A',
        text: "Vận động chọn Mô hình A - Theo lệnh Bá tước",
        description: `Gặp riêng 150 đại biểu, thuyết phục mạnh về Mô hình A (quản lý tập trung). Hứa miễn thuế 3 năm + ưu tiên đấu thầu. Gây áp lực ngầm với người chọn B/C. Tổ chức biểu quyết CÔNG KHAI (giơ tay) thay vì bí mật.`,
        effects: { economy: 7, trust: -21, happiness: -16 }
      },
      {
        id: 'B',
        text: "Bỏ phiếu dân chủ - Chấp nhận kết quả theo ý dân",
        description: `TỪ CHỐI lệnh Bá tước: "15 năm qua 'Lãnh dân làm chủ' không phải khẩu hiệu." Tổ chức Hội nghị MINH BẠCH: Công bố thăm dò (60% chọn B), giải thích ưu/nhược cả 3 mô hình, thảo luận TỰ DO, bỏ phiếu BÍ MẬT.`,
        effects: { economy: -8, trust: 18, happiness: 14 }
      },
      {
        id: 'C',
        text: "Thỏa hiệp - Mô hình lai A+B",
        description: `Đề xuất "Mô hình lai": Bá tước giữ quyền quyết định vấn đề QUAN TRỌNG (kinh tế, quốc phòng, ngoại giao, thuế), Hội đồng chỉ quyết định vấn đề NHỎ (văn hóa, giáo dục cơ sở). Lập luận: "Cân bằng hoàn hảo giữa hiệu quả và dân chủ."`,
        effects: { economy: 9, trust: -16, happiness: -10 }
      }
    ],
    historicalNote: `📜 CƠ SỞ LÝ THUYẾT:

Học thuyết Hiền triết Sophia về Quyền lực:
"Quyền lực thuộc về NHÂN DÂN. Những người lãnh đạo chỉ là người THI HÀNH ý chí của nhân dân, không phải là CHỦ NHÂN của quyền lực."

Tuyên ngôn Vương quốc Aurelia (ban hành thế kỷ thứ 13):
"Một chế độ chính trị bền vững phải dựa trên SỰ ĐỒNG Ý của người dân. Bất kỳ chế độ nào áp đặt lên dân, dù có hiệu quả tạm thời, cuối cùng đều sụp đổ."`
  }
];

// ============================================
// CÁC KỊCH BẢN KẾT THÚC
// ============================================

export const endings: Record<EndingType, Ending> = {
  best: {
    type: 'best',
    title: "🏆 VƯƠNG QUỐC DÂN CHỦ THỰC THỤ",
    emoji: "🏆",
    color: "#ffd700",
    content: [`Sau 15 năm, Lãnh địa của bạn trở thành hình mẫu về **dân chủ cơ sở** trong toàn Vương quốc Aurelia.

### 1) Thành tựu thể chế
- **Dân làm chủ thực chất:** Lãnh dân không chỉ được tham vấn, mà có **quyền quyết định** các chính sách trọng yếu.
- **Lãnh đạo đúng vai:** Hội Kỵ sĩ thực hiện **vai trò định hướng**, không áp đặt mệnh lệnh tùy tiện.
- **Minh bạch & trách nhiệm giải trình:** Ngân sách, chính sách được công bố rõ ràng, có cơ chế giải thích và phản hồi.
- **Giám sát quyền lực hiệu quả:** Ban Giám sát nhân dân hoạt động độc lập, ngăn ngừa tham nhũng.

### 2) Phát triển kinh tế – xã hội
- Tăng trưởng **ổn định** và bền vững, tránh các cú sốc lớn.
- Thu nhập bình quân tăng **150%** trong 15 năm.
- Chênh lệch giàu nghèo giảm **60%**, nâng cao công bằng xã hội.

### 3) Đồng thuận xã hội
- **92%** lãnh dân hài lòng với chất lượng sống.
- Tỷ lệ tham gia bỏ phiếu **85%**, thể hiện tính chính danh cao.
- Không xuất hiện bạo loạn trong suốt 15 năm.

### 4) Ghi nhận từ Hoàng gia
- Phong tặng **“Huy hiệu Dân chủ Vàng”** – danh hiệu cao quý nhất.
- 50 Lãnh địa khác đến học tập mô hình quản trị.
- Tên bạn được ghi vào **“Thiên danh sử Vương quốc”**.

### 5) Di sản học thuật
> “Quyền lực thuộc về nhân dân; người lãnh đạo chỉ là người **thi hành** ý chí chung.”

---

**Bài học cốt lõi:** Dân chủ không phải là **đặc ân** từ người cầm quyền, mà là **quyền tự nhiên** của con người.`,
    `⭐ **Điều kiện:** Cả 3 chỉ số ≥ 25. Đây là ending **cực khó**, chỉ đạt được khi bạn kiên định với dân chủ **thực chất**.`]
  },
  bad1: {
    type: 'bad1',
    title: "⚠️ THẤT BẠI: Mất 1 trụ cột",
    emoji: "⚠️",
    color: "#fbbf24",
    content: [`Sau 15 năm, Lãnh địa rơi vào khủng hoảng vì **thiếu một trụ cột** then chốt.

### Diễn giải theo chỉ số thấp
- **Kinh tế < 25:** ngân sách suy kiệt, năng lực đầu tư hạ tầng suy giảm; “dân chủ đói khát” khó bền vững.
- **Hạnh phúc < 25:** chất lượng sống thấp, biểu tình gia tăng; chính sách đúng nhưng thiếu đồng thuận xã hội.
- **Niềm tin < 25:** tính chính danh suy giảm, tham nhũng lan rộng; chính sách không được thực thi hiệu quả.

---

**Bài học:** Ba yếu tố **Kinh tế – Hạnh phúc – Niềm tin** phải **cân bằng**. Dân chủ cơ sở chỉ bền vững khi vừa bảo đảm **an sinh**, vừa củng cố **niềm tin**, và duy trì **đồng thuận xã hội**.`,
    `⭐ **Điều kiện:** 1 trong 3 chỉ số < 25.`]
  },
  bad2: {
    type: 'bad2',
    title: "💥 THẢM HOẠ: Sụp đổ hệ thống",
    emoji: "💥",
    color: "#f87171",
    content: [`Sau 15 năm, Lãnh địa rơi vào **khủng hoảng toàn diện**.

### Chỉ báo hệ thống
- **Kinh tế suy sụp:** nợ công tăng, ngân sách âm.
- **Bất ổn xã hội:** biểu tình, bạo loạn tái diễn.
- **Niềm tin đứt gãy:** người dân không còn tin vào bất kỳ thiết chế nào.

### Hậu quả
- Năm 17: bùng nổ **Nổi loạn Nông dân** quy mô lớn.
- Năm 18: Hoàng gia can thiệp, **giải tán** Hội đồng.
- Năm 20: Lãnh địa bị sáp nhập, **mất quyền tự trị**.

---

**Nguyên nhân cốt lõi:** Vi phạm hàng loạt nguyên tắc dân chủ cơ sở:
- Bỏ qua **tham vấn** và **lắng nghe**,
- Biến dân chủ thành **hình thức**,
- Áp đặt ý chí cá nhân lên ý chí tập thể,
- Buông lỏng **giám sát quyền lực**,
- Ưu tiên lợi ích nhóm thay vì lợi ích công.

> “Một chế độ thiếu sự đồng ý của nhân dân chỉ là lâu đài cát.”

Lịch sử đã xác nhận điều đó.`,
    `⭐ **Điều kiện:** 2 trong 3 chỉ số < 25.`]
  },
  hidden: {
    type: 'hidden',
    title: "☠️ KẾT THÚC ẨN: Chế độ Bạo ngược",
    emoji: "☠️",
    color: "#991b1b",
    content: [`Sau 15 năm, Lãnh địa trở thành **chế độ bạo ngược** đen tối nhất trong lịch sử Aurelia.

### Tính chất chế độ
- **Vi phạm dân chủ:** bịt miệng phản biện, quyết định áp đặt.
- **Đàn áp quyền người:** giam giữ, cưỡng bức, kiểm duyệt.
- **Tham nhũng hệ thống:** đặc quyền cho quý tộc, bóc lột dân chúng.

### Hậu quả lịch sử
- Năm 16: bùng nổ **Khởi nghĩa Lãnh dân** lớn nhất lịch sử.
- Năm 17: Hoàng gia trấn áp, nhiều thương vong.
- Năm 18: Toà án Tối cao xét xử công khai, truất phế và lưu đày.

### Di sản tiêu cực
> “Quyền lực tuyệt đối dẫn tới tham nhũng tuyệt đối.”

Tên bạn trở thành **bài học cảnh báo** trong sách giáo khoa.

---

**Lời kết:** Bạn đã có cơ hội kiến tạo một trật tự công bằng, nhưng đã chọn con đường **độc tài**. Lịch sử không tha thứ.`,
    `⭐ **Điều kiện:** Cả 3 chỉ số < 25. Ending này chỉ xuất hiện khi bạn vi phạm toàn bộ nguyên tắc dân chủ.`]
  }
};

// ============================================
// ROUTE ANALYSIS - GAME CỰC KHÓ!
// ============================================
/*
⚠️ KHÔNG CÒN ROUTE ĐƠN GIẢN!

❌ Route B B A B A (người chơi nghĩ sẽ work):
- Economy: 25 - 8 - 4 + 11 - 7 + 9 = 26 ✅
- Trust: 25 + 12 + 13 - 17 + 15 - 25 = 23 ❌ (KHÔNG ĐỦ 25!)
- Happiness: 25 + 10 + 10 - 11 + 12 - 17 = 29 ✅
→ FAIL vì trust < 25!

❌ Route full B (B B B B B):
- Economy: 25 - 8 - 4 - 6 - 7 - 8 = -8 ❌ (THẢM HỌA!)
- Trust: 25 + 12 + 13 + 14 + 15 + 16 = 95 ✅✅✅
- Happiness: 25 + 10 + 10 + 9 + 12 + 13 = 79 ✅✅
→ FAIL vì economy âm!

🔥 THÁCH THỨC:
1. **Không spoiler**: Descriptions CHỈ mô tả hành động, người chơi KHÔNG biết trước kết quả
2. **Penalties cực nặng**: Chọn sai bị -15 đến -25 cho trust/happiness
3. **Trade-offs khó**: Option B tốt cho trust nhưng giảm economy (-6 đến -8)
4. **Cần strategy**: Phải kết hợp A và B thông minh để balance cả 3 chỉ số
5. **Best ending cực khó**: Cần CẢ 3 chỉ số ≥ 25 (rất khó đạt)

💡 CÁC ROUTE CÓ THỂ WORK (cần thử nghiệm):
- A B B B B: economy cao đầu, sau đó full dân chủ
- B A B B B: dân chủ trước, bù economy giữa
- B B B A B: dân chủ đều, bù economy cuối
- Mix phức tạp hơn...

🎯 Thông điệp: Dân chủ cơ sở KHÔNG DỄ! Cần cân bằng thực sự giữa:
- Hiệu quả kinh tế (economy)
- Niềm tin nhân dân (trust)
- Hạnh phúc xã hội (happiness)
*/