import { useState } from 'react'
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Progress } from './components/ui/progress'
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  TrendingUp, 
  Heart,
  Instagram,
  Upload,
  Video,
  Star,
  Globe,
  Package
} from 'lucide-react'
import './App.css'

// Importar imagens
import v6CoverTeam from './assets/IMG_1628.jpeg'
import v6CoverProducts from './assets/IMG_1626.jpeg'
import v6CoverLogo from './assets/PRETO.png'

// Componente Landing Page
function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={v6CoverLogo} alt="V6 Cover" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900">V6 Cover</span>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/candidatura">Candidatar-se</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Seja o Rosto e a Voz da <span className="text-blue-600">V6 Cover</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Buscamos criatividade, energia e paixão por tecnologia para conectar nossa marca ao mundo.
            Vaga para <strong>Criadora de Conteúdo</strong> - empresa em crescimento com produtos exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/candidatura">
                Quero Fazer Parte! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://instagram.com/v6cover" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Conheça a V6 Cover
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a V6 Cover */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">👋 Quem somos e de onde viemos</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  A V6 Cover nasceu em dezembro de 2024, com uma missão clara: 
                  <strong> reposicionar o mercado de capas com uma marca própria, identidade premium e padrão de excelência.</strong>
                </p>
                <p>
                  Desde o início, levamos esse sonho a sério: fomos pessoalmente à China, criamos um projeto direto com fábrica, 
                  selecionamos materiais de alto padrão e desenvolvemos produtos exclusivos, pensados nos mínimos detalhes.
                </p>
                <p className="font-semibold text-blue-600">
                  A V6 nasceu com propósito, estrutura e visão.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={v6CoverTeam} 
                alt="Equipe V6 Cover" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O que já está de pé */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">🧱 O que já está de pé</h2>
            <p className="text-xl text-gray-600">
              A V6 não é só uma ideia bonita no papel — ela já está rodando e crescendo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Estoque Próprio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Produtos em estoque no Brasil, prontos para entrega
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Design Exclusivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Produtos com design e acabamento únicos no mercado
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Padrão Internacional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Nova remessa com conteúdo internacional de alto nível
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Marketing Ativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Estratégia de marketing com planejamento semanal
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
            <p className="text-lg font-medium text-gray-700">
              "Ou seja: <strong>a base está montada. Agora é hora de escalar.</strong>"
            </p>
          </div>
        </div>
      </section>

      {/* Por que essa vaga importa */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={v6CoverProducts} 
                alt="Produtos V6 Cover" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">🚀 Por que essa vaga importa agora</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Estamos entrando numa <strong>fase estratégica de posicionamento digital</strong>.
                </p>
                <p>
                  Queremos que a comunicação da V6 tenha vida, ritmo e autenticidade — e isso não se constrói 
                  com peças prontas, mas com alguém que entenda a essência da marca.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">A pessoa que assumir esse papel vai:</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Criar e liderar a linha criativa da marca</li>
                    <li>• Participar da construção de campanhas e narrativas</li>
                    <li>• Ter liberdade criativa real — com visão, direção e estrutura</li>
                    <li>• Crescer junto com a empresa, com reconhecimento e resultado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Seletivo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">📋 Nosso Processo Seletivo</h2>
            <p className="text-xl text-gray-600">
              4 fases pensadas para nos conhecermos melhor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle>Formulário de Inscrição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  O primeiro passo para nos conhecermos. Mostre-nos quem você é e um pouco do seu trabalho.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle>Bate-papo Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Uma conversa para aprofundar no seu perfil, suas experiências e alinhar expectativas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <CardTitle>Desafios Práticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  É hora de ver sua criatividade em ação! Enviaremos alguns desafios para você colocar a mão na massa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <CardTitle>Teste Presencial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  A etapa final! Um teste prático em nosso escritório para nos conhecermos pessoalmente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">🎯 Convite Final</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Se você tem visão, criatividade, compromisso com excelência e sente que pode fazer mais do que está fazendo hoje, 
            esse convite é pra você. A V6 está em plena expansão. A marca está viva, o produto é forte, a visão é clara.
          </p>
          <p className="text-2xl font-bold mb-8">
            E talvez, o que está faltando agora, seja você.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/candidatura">
              Candidatar-se Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={v6CoverLogo} alt="V6 Cover" className="h-8 w-auto filter invert" />
            <span className="text-lg font-bold">V6 Cover</span>
          </div>
          <p className="text-gray-400 mb-4">
            Proteção, Estilo e Inovação em cada produto
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com/v6cover" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
            <Link to="/admin" className="text-gray-500 hover:text-gray-400 text-sm">
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Componente Formulário
function FormularioCandidatura() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    instagram: '',
    portfolio: '',
    
    // Sobre Você e Criação de Conteúdo
    descricao: '',
    inspiracao: '',
    ferramentas: '',
    cameras: '',
    
    // Personalidade e Postura Profissional
    problema: '',
    rapidoVsPerfeito: '',
    diferencial: '',
    definicao: '',
    motivacao: ''
  })

  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // Salvar dados (simulação)
    const candidaturas = JSON.parse(localStorage.getItem('candidaturas') || '[]')
    candidaturas.push({
      ...formData,
      id: Date.now(),
      data: new Date().toLocaleDateString('pt-BR')
    })
    localStorage.setItem('candidaturas', JSON.stringify(candidaturas))
    navigate('/sucesso')
  }

  const progress = (currentStep / 3) * 100

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Formulário de Candidatura</h1>
            <p className="text-gray-600">Vaga: Criadora de Conteúdo - V6 Cover</p>
            <div className="mt-4">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-gray-500 mt-2">Etapa {currentStep} de 3</p>
            </div>
          </div>

          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">📋 Dados Pessoais</h2>
              
              <div>
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="telefone">Telefone (WhatsApp) *</Label>
                <Input
                  id="telefone"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <Label htmlFor="cidade">Cidade/Estado *</Label>
                <Input
                  id="cidade"
                  value={formData.cidade}
                  onChange={(e) => handleInputChange('cidade', e.target.value)}
                  placeholder="São Paulo/SP"
                />
              </div>

              <div>
                <Label htmlFor="instagram">Link do seu Instagram *</Label>
                <Input
                  id="instagram"
                  value={formData.instagram}
                  onChange={(e) => handleInputChange('instagram', e.target.value)}
                  placeholder="https://instagram.com/seuperfil"
                />
              </div>

              <div>
                <Label htmlFor="portfolio">Link para portfólio ou vídeo de apresentação</Label>
                <Input
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange('portfolio', e.target.value)}
                  placeholder="Link opcional para seu trabalho"
                />
              </div>

              <Button 
                onClick={() => setCurrentStep(2)} 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!formData.nome || !formData.email || !formData.telefone || !formData.cidade || !formData.instagram}
              >
                Próxima Etapa <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">🎨 Sobre Você e a Criação de Conteúdo</h2>
              
              <div>
                <Label htmlFor="descricao">Como você se descreveria em 3 palavras? *</Label>
                <Input
                  id="descricao"
                  value={formData.descricao}
                  onChange={(e) => handleInputChange('descricao', e.target.value)}
                  placeholder="Ex: Criativa, comunicativa, proativa"
                />
              </div>

              <div>
                <Label htmlFor="inspiracao">O que mais te inspira no mundo digital hoje? *</Label>
                <Textarea
                  id="inspiracao"
                  value={formData.inspiracao}
                  onChange={(e) => handleInputChange('inspiracao', e.target.value)}
                  placeholder="Conte sobre suas inspirações..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="ferramentas">Quais ferramentas de edição você mais usa? *</Label>
                <Input
                  id="ferramentas"
                  value={formData.ferramentas}
                  onChange={(e) => handleInputChange('ferramentas', e.target.value)}
                  placeholder="Ex: CapCut, InShot, Canva, Photoshop..."
                />
              </div>

              <div>
                <Label htmlFor="cameras">Como você se sente sobre aparecer em frente às câmeras? *</Label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.cameras}
                  onChange={(e) => handleInputChange('cameras', e.target.value)}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="adoro">Adoro e já faço!</option>
                  <option value="vergonha">Tenho um pouco de vergonha, mas topo o desafio</option>
                  <option value="bastidores">Prefiro ficar nos bastidores</option>
                </select>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(1)}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={() => setCurrentStep(3)} 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  disabled={!formData.descricao || !formData.inspiracao || !formData.ferramentas || !formData.cameras}
                >
                  Próxima Etapa <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">💡 Personalidade e Postura Profissional</h2>
              
              <div>
                <Label htmlFor="problema">Quando você se depara com um problema novo e não sabe a solução, qual costuma ser sua primeira atitude? *</Label>
                <Textarea
                  id="problema"
                  value={formData.problema}
                  onChange={(e) => handleInputChange('problema', e.target.value)}
                  placeholder="Descreva como você lida com problemas..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="rapidoVsPerfeito">No processo de criação de conteúdo, quando você precisa escolher entre "entregar rápido" e "entregar perfeito", o que pesa mais para você? Por quê? *</Label>
                <Textarea
                  id="rapidoVsPerfeito"
                  value={formData.rapidoVsPerfeito}
                  onChange={(e) => handleInputChange('rapidoVsPerfeito', e.target.value)}
                  placeholder="Explique sua abordagem..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="diferencial">Na sua visão, qual é o seu maior diferencial como profissional de criação de conteúdo? *</Label>
                <Textarea
                  id="diferencial"
                  value={formData.diferencial}
                  onChange={(e) => handleInputChange('diferencial', e.target.value)}
                  placeholder="Conte sobre seu diferencial..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="definicao">Se perguntássemos para um ex-colega de trabalho ou cliente, qual palavra ele usaria para te descrever? *</Label>
                <Input
                  id="definicao"
                  value={formData.definicao}
                  onChange={(e) => handleInputChange('definicao', e.target.value)}
                  placeholder="Uma palavra que te define"
                />
              </div>

              <div>
                <Label htmlFor="motivacao">Por que você quer fazer parte da V6 Cover? *</Label>
                <Textarea
                  id="motivacao"
                  value={formData.motivacao}
                  onChange={(e) => handleInputChange('motivacao', e.target.value)}
                  placeholder="Conte sua motivação..."
                  rows={4}
                />
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(2)}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={handleSubmit}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  disabled={!formData.problema || !formData.rapidoVsPerfeito || !formData.diferencial || !formData.definicao || !formData.motivacao}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Enviar Candidatura
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Página de Sucesso
function PaginaSucesso() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Candidatura Enviada!</h1>
        <p className="text-gray-600 mb-6">
          Obrigado por se candidatar à vaga de Criadora de Conteúdo na V6 Cover. 
          Analisaremos seu perfil e entraremos em contato em breve.
        </p>
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
          <Link to="/">Voltar ao Início</Link>
        </Button>
      </div>
    </div>
  )
}

// Painel Admin
function PainelAdmin() {
  const candidaturas = JSON.parse(localStorage.getItem('candidaturas') || '[]')

  const limparDados = () => {
    localStorage.removeItem('candidaturas')
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
            <div className="space-x-4">
              <Button variant="outline" onClick={limparDados}>
                Limpar Dados
              </Button>
              <Button asChild>
                <Link to="/">Voltar ao Site</Link>
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Candidaturas Recebidas ({candidaturas.length})
            </h2>
          </div>

          {candidaturas.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Nenhuma candidatura recebida ainda.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {candidaturas.map((candidatura) => (
                <Card key={candidatura.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{candidatura.nome}</span>
                      <span className="text-sm text-gray-500">{candidatura.data}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Email:</strong> {candidatura.email}
                      </div>
                      <div>
                        <strong>Telefone:</strong> {candidatura.telefone}
                      </div>
                      <div>
                        <strong>Cidade:</strong> {candidatura.cidade}
                      </div>
                      <div>
                        <strong>Instagram:</strong> 
                        <a href={candidatura.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                          Ver perfil
                        </a>
                      </div>
                      <div className="md:col-span-2">
                        <strong>Motivação:</strong> {candidatura.motivacao}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// App Principal
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/candidatura" element={<FormularioCandidatura />} />
        <Route path="/sucesso" element={<PaginaSucesso />} />
        <Route path="/admin" element={<PainelAdmin />} />
      </Routes>
    </Router>
  )
}

export default App

