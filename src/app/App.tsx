import React, { useState } from 'react';
import {
  Plane,
  Users,
  Hotel,
  UtensilsCrossed,
  MapPin,
  AlertCircle,
  Camera,
  UserPlus,
  Trophy,
  Sparkles,
  Monitor,
  Clock,
  CreditCard,
  Star,
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773379412328-7f101292ab63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBzdW5zZXQlMjBob3Jpem9ufGVufDF8fHx8MTc3MzkyMDY4OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Travel adventure"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Набор открыт!</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Английский для путешествий
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
          </p>

          <p className="text-base md:text-lg text-foreground/90 max-w-3xl mx-auto mb-12">
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
          </p>

          {/* Первая кнопка (теперь открывает модалку) */}
          <button
            onClick={openModal}
            className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-accent rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-secondary/50 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 text-background font-semibold text-lg">Записаться на курс</span>
          </button>
        </div>
      </section>

      {/* Для кого курс */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl text-center">Для кого курс</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl text-primary font-bold">1</span>
              </div>
              <h3 className="text-2xl mb-3 text-primary">Первая группа</h3>
              <p className="text-lg text-muted-foreground">4–5 класс</p>
            </div>

            <div className="bg-card border border-secondary/20 rounded-2xl p-8 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <span className="text-2xl text-secondary font-bold">2</span>
              </div>
              <h3 className="text-2xl mb-3 text-secondary">Вторая группа</h3>
              <p className="text-lg text-muted-foreground">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Программа курса */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl text-center mb-16 flex items-center justify-center gap-3">
            <span className="text-accent">📚</span>
            Программа курса
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Модуль 1 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-primary">Аэропорт без стресса</h3>
                  <p className="text-muted-foreground mb-3">
                    Регистрация, паспортный контроль, вопросы на таможне — всё на английском.
                  </p>
                  <p className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent">👉</span>
                    Уверенность уже в первые часы за границей.
                  </p>
                </div>
              </div>
            </div>

            {/* Модуль 2 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-secondary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Hotel className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-secondary">В отеле: заселение и помощь</h3>
                  <p className="text-muted-foreground mb-3">
                    Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.
                  </p>
                  <p className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent">👉</span>
                    Практика вежливых фраз и повседневной лексики.
                  </p>
                </div>
              </div>
            </div>

            {/* Модуль 3 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-accent/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <UtensilsCrossed className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-accent">Кафе и рестораны</h3>
                  <p className="text-muted-foreground mb-3">
                    Заказ еды, вопросы про аллергены, счёт и чаевые.
                  </p>
                  <p className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent">👉</span>
                    Развитие гастрономического словаря и уверенности в общении.
                  </p>
                </div>
              </div>
            </div>

            {/* Модуль 4 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-primary">На улице: ориентирование и просьбы</h3>
                  <p className="text-muted-foreground mb-3">
                    Как спросить дорогу, вызвать такси или найти аптеку.
                  </p>
                  <p className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent">👉</span>
                    Понимание устной речи и произношения в реальных ситуациях.
                  </p>
                </div>
              </div>
            </div>

            {/* Модуль 5 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-secondary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <AlertCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-secondary">Экстренные случаи</h3>
                  <p className="text-muted-foreground mb-3">
                    Потеря вещей, болезнь, помощь полиции — всё это на английском.
                  </p>
                  <p className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent">👉</span>
                    Важные фразы, которые могут спасти отпуск.
                  </p>
                </div>
              </div>
            </div>

            {/* Модуль 6 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-accent/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Camera className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-accent">Туризм и развлечения</h3>
                  <p className="text-muted-foreground mb-3">
                    Покупка билетов, экскурсии, общение с гидами, музеи и парки.
                  </p>
                  <p className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent">👉</span>
                    Погружение в культурный контекст через язык.
                  </p>
                </div>
              </div>
            </div>

            {/* Модуль 7 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <UserPlus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-primary">Дружба в путешествиях</h3>
                  <p className="text-muted-foreground mb-3">
                    Как познакомиться с другими детьми или подростками за границей.
                  </p>
                  <p className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent">👉</span>
                    Игровая практика диалогов и неформального общения.
                  </p>
                </div>
              </div>
            </div>

            {/* Модуль 8 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-secondary/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Trophy className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-secondary">Дипломный проект: «Мой идеальный отпуск»</h3>
                  <p className="text-muted-foreground mb-3">
                    Ребёнок планирует воображаемое путешествие и представляет его на английском.
                  </p>
                  <p className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent">👉</span>
                    Развитие связной речи и творческого самовыражения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Почему этот курс особенный */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl text-center mb-16 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-accent" />
            Почему этот курс особенный?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <p className="text-foreground/90">
                Акцент на практическую, живую речь, а не на грамматику ради грамматики
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-foreground/90">
                Все ситуации — из реальной жизни путешественника
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <p className="text-foreground/90">
                Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <p className="text-foreground/90">
                Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Что потребуется */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center mb-12 flex items-center justify-center gap-3">
            <Monitor className="w-8 h-8 text-primary" />
            Что потребуется
          </h2>

          <div className="bg-background border border-border rounded-2xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">Стабильный интернет и Zoom</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Расписание и Стоимость */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Расписание */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-8 flex items-center gap-3">
                <Clock className="w-8 h-8 text-secondary" />
                Расписание
              </h2>

              <div className="space-y-4">
                <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h3 className="text-xl text-primary">Группа 4–5 класс</h3>
                  </div>
                  <p className="text-lg text-muted-foreground ml-13">Четверг, 15:00 (МСК)</p>
                </div>

                <div className="bg-card border border-secondary/20 rounded-2xl p-6 hover:border-secondary/40 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                    <h3 className="text-xl text-secondary">Группа 6–8 класс</h3>
                  </div>
                  <p className="text-lg text-muted-foreground ml-13">Пятница, 15:30 (МСК)</p>
                </div>
              </div>
            </div>

            {/* Стоимость */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-8 flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-accent" />
                Стоимость
              </h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border-2 border-accent/30 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 rounded-full">
                    <span className="text-sm text-accent font-semibold">Лучшее предложение</span>
                  </div>
                  <h3 className="text-xl mb-3 text-accent">Полный курс</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-accent">150 бел. руб.</span>
                    <span className="text-xl text-muted-foreground">руб</span>
                  </div>
                  <p className="text-muted-foreground">10 уроков</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl mb-3">Абонемент</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold">12 бел. руб.</span>
                    <span className="text-xl text-muted-foreground">руб / урок</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <AlertCircle className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-semibold">📢 Набор открыт!</span>
          </div>

          <h2 className="text-3xl md:text-4xl mb-6">Места ограничены!</h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Группы маленькие — максимум <span className="text-accent font-semibold">6 детей</span>, чтобы каждый получил внимание.
          </p>

          <p className="text-xl md:text-2xl mb-12 text-foreground/90">
            👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
          </p>

          {/* Вторая кнопка (теперь открывает модалку) */}
          <button
            id="register-button"
            onClick={openModal}
            className="group relative px-12 py-6 bg-gradient-to-r from-secondary to-accent rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-secondary/50 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 text-background font-bold text-xl md:text-2xl">Записаться на курс</span>
          </button>

          <p className="mt-8 text-sm text-muted-foreground">
            При нажатии на кнопку откроется форма регистрации
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Английский для путешествий. Все права защищены.</p>
        </div>
      </footer>

      {/* Модальное окно с формой */}
      {isModalOpen && (
        <div style={styles.overlay} onClick={closeModal}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.title}>Запись на курс</h2>
            <form action="https://formspree.io/f/ваш-код" method="POST">
              <div style={styles.field}>
                <label>Имя:</label>
                <input type="text" name="name" required style={styles.input} />
              </div>
              <div style={styles.field}>
                <label>Email:</label>
                <input type="email" name="email" required style={styles.input} />
              </div>
              <div style={styles.field}>
                <label>Телефон:</label>
                <input type="tel" name="phone" required style={styles.input} />
              </div>
              <div style={styles.buttons}>
                <button type="submit" style={styles.submitButton}>Отправить</button>
                <button type="button" onClick={closeModal} style={styles.closeButton}>Закрыть</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Стили для модального окна
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  title: {
    marginTop: 0,
    marginBottom: '20px',
    color: '#333',
  },
  field: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  closeButton: {
    flex: 1,
    backgroundColor: '#f44336',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
