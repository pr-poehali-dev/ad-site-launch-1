import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [coefficient, setCoefficient] = useState(1.00);
  const [isFlying, setIsFlying] = useState(false);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameActive) {
      interval = setInterval(() => {
        setCoefficient(prev => {
          const newCoeff = prev + Math.random() * 0.05 + 0.02;
          if (newCoeff > 10 && Math.random() < 0.3) {
            setGameActive(false);
            setIsFlying(false);
            return prev;
          }
          return newCoeff;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [gameActive]);

  const startGame = () => {
    setCoefficient(1.00);
    setGameActive(true);
    setIsFlying(true);
  };

  const cashOut = () => {
    setGameActive(false);
    setIsFlying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-600 to-orange-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Plane" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">AVIATOR</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#game" className="text-gray-700 hover:text-primary">Игра</a>
            <a href="#bonuses" className="text-gray-700 hover:text-primary">Бонусы</a>
            <a href="#rules" className="text-gray-700 hover:text-primary">Правила</a>
            <a href="#support" className="text-gray-700 hover:text-primary">Поддержка</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Войти</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <img 
              src="/img/31cd5423-3a7d-4ceb-b14c-8e204a45b2b2.jpg" 
              alt="Fighter Jet" 
              className="w-64 h-64 mx-auto mb-8 rounded-full shadow-2xl animate-pulse"
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <Badge className="bg-primary text-white">🔥 ВЕРНУЛАСЬ В РОССИЮ</Badge>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            AVIATOR GAME
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Азартная игра с самолетом, которая покорила миллионы игроков по всему миру
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="Play" size={24} className="mr-2" />
              ИГРАТЬ СЕЙЧАС
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              <Icon name="Gift" size={24} className="mr-2" />
              ПОЛУЧИТЬ БОНУС
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-center mb-6">Регистрация</h2>
              <div className="space-y-4">
                <Input placeholder="Email или телефон" />
                <Input type="password" placeholder="Пароль" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                  Зарегистрироваться
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Уже есть аккаунт? <a href="#" className="text-primary hover:underline">Войти</a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Demo Section */}
      <section id="game" className="py-16 bg-gradient-to-r from-aviator-dark to-aviator-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Игровой процесс
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-black/50 backdrop-blur-sm border-white/20">
              <div className="relative bg-gradient-to-t from-green-900 to-green-600 rounded-lg p-8 mb-6 overflow-hidden">
                {/* Flight Path */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path 
                      d="M 50 150 Q 200 100 350 50" 
                      stroke="rgba(255,255,255,0.2)" 
                      strokeWidth="2" 
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
                
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div className="text-white">
                    <div className="text-sm opacity-75">Коэффициент</div>
                    <div className={`text-4xl font-bold animate-coefficient-pulse ${
                      gameActive ? 'text-yellow-400' : 'text-white'
                    }`}>
                      {coefficient.toFixed(2)}×
                    </div>
                  </div>
                  
                  {/* Animated Plane */}
                  <div className="relative">
                    <img 
                      src="/img/ddca54fb-693b-48a1-978c-7352a30f9983.jpg" 
                      alt="Plane" 
                      className={`w-16 h-16 rounded-full transition-all duration-300 ${
                        isFlying ? 'animate-plane-takeoff' : 'animate-float'
                      }`}
                    />
                    {/* Plane Trail Effect */}
                    {isFlying && (
                      <div className="absolute -left-20 top-8 w-16 h-1 bg-gradient-to-r from-transparent to-white opacity-50 animate-pulse" />
                    )}
                  </div>
                </div>
                
                <div className="text-center relative z-10">
                  {!gameActive ? (
                    <Button 
                      size="lg" 
                      onClick={startGame}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold"
                    >
                      <Icon name="Play" size={20} className="mr-2" />
                      СТАРТ ИГРЫ
                    </Button>
                  ) : (
                    <Button 
                      size="lg" 
                      onClick={cashOut}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold animate-pulse"
                    >
                      <Icon name="DollarSign" size={20} className="mr-2" />
                      ЗАБРАТЬ {(100 * coefficient).toFixed(0)}₽
                    </Button>
                  )}
                </div>
                
                {/* Game Status */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`${
                    gameActive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
                  }`}>
                    {gameActive ? '🟢 В ПОЛЕТЕ' : '⭕ ОЖИДАНИЕ'}
                  </Badge>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-bold mb-4">Ваша ставка</h3>
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="100" 
                      disabled={gameActive}
                      className="bg-white/10 border-white/20 text-white disabled:opacity-50" 
                    />
                    <Button 
                      disabled={gameActive}
                      className="bg-primary disabled:opacity-50"
                    >
                      Поставить
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-4">Автовывод</h3>
                  <div className="flex space-x-2">
                    <Input placeholder="2.00×" className="bg-white/10 border-white/20 text-white" />
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                      Авто
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Бонусы и акции
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Gift" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Приветственный бонус</h3>
              <p className="text-gray-600 mb-4">+100% к первому депозиту до 25 000₽</p>
              <Button className="bg-primary">Получить</Button>
            </Card>
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Coins" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Кэшбек</h3>
              <p className="text-gray-600 mb-4">До 10% возврат с каждой ставки</p>
              <Button className="bg-primary">Активировать</Button>
            </Card>
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Trophy" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Турниры</h3>
              <p className="text-gray-600 mb-4">Еженедельные призовые фонды</p>
              <Button className="bg-primary">Участвовать</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-16 bg-aviator-cloud">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Правила игры
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Как играть в Aviator?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Делайте ставку перед началом раунда. Самолет взлетает с коэффициентом 1.00×
                  и постепенно увеличивает его. Заберите выигрыш до того, как самолет улетит!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Что такое автовывод?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Автовывод позволяет автоматически забрать выигрыш при достижении
                  заданного коэффициента. Это поможет зафиксировать прибыль.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Максимальная ставка?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Максимальная ставка составляет 100 000₽ за раунд. Минимальная - 1₽.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 bg-aviator-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Поддержка игроков
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <Icon name="MessageCircle" size={48} className="mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Онлайн-чат</h3>
              <p className="text-white/80 mb-4">24/7 поддержка в реальном времени</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Написать
              </Button>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <Icon name="Mail" size={48} className="mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/80 mb-4">support@aviator-game.ru</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Отправить
              </Button>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <Icon name="Phone" size={48} className="mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-white/80 mb-4">8-800-123-45-67 (бесплатно)</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Позвонить
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Plane" size={24} className="text-primary" />
            <span className="text-xl font-bold">AVIATOR GAME</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Aviator Game. Играйте ответственно. 18+
          </p>
        </div>
      </footer>
    </div>
  );
}