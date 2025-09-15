import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [studentName, setStudentName] = useState('');
  const [className, setClassName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [selectedBackground, setSelectedBackground] = useState('classic');
  const [selectedStyle, setSelectedStyle] = useState('formal');

  const subjects = [
    { id: 'math', name: 'Математика', icon: 'Calculator' },
    { id: 'russian', name: 'Русский язык', icon: 'BookOpen' },
    { id: 'literature', name: 'Литература', icon: 'Book' },
    { id: 'history', name: 'История', icon: 'Clock' },
    { id: 'geography', name: 'География', icon: 'Globe' },
    { id: 'biology', name: 'Биология', icon: 'Leaf' },
    { id: 'chemistry', name: 'Химия', icon: 'Flask' },
    { id: 'physics', name: 'Физика', icon: 'Zap' },
    { id: 'english', name: 'Английский язык', icon: 'Languages' },
    { id: 'art', name: 'ИЗО', icon: 'Palette' },
    { id: 'music', name: 'Музыка', icon: 'Music' },
    { id: 'pe', name: 'Физкультура', icon: 'Dumbbell' }
  ];

  const backgrounds = [
    { id: 'classic', name: 'Классический', color: '#f8fafc' },
    { id: 'lined', name: 'В линейку', color: '#ffffff' },
    { id: 'checkered', name: 'В клетку', color: '#ffffff' },
    { id: 'academic', name: 'Академический', color: '#f1f5f9' }
  ];

  const styles = [
    { id: 'formal', name: 'Официальный' },
    { id: 'elegant', name: 'Элегантный' },
    { id: 'modern', name: 'Современный' },
    { id: 'traditional', name: 'Традиционный' }
  ];

  const generateLabel = () => {
    const selectedSubjectData = subjects.find(s => s.id === selectedSubject);
    if (!selectedSubjectData || !studentName || !className) return null;

    return {
      subject: selectedSubjectData.name,
      student: studentName,
      class: className,
      school: schoolName || 'ГБОУ СОШ',
      style: selectedStyle,
      background: selectedBackground
    };
  };

  const label = generateLabel();

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Конструктор подписей для тетрадей
          </h1>
          <p className="text-lg text-slate-600">
            Создайте красивые подписи для школьных тетрадей в академическом стиле
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <div className="space-y-6">
            {/* Student Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={20} />
                  Информация об ученике
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="student-name">Имя и фамилия ученика</Label>
                  <Input
                    id="student-name"
                    placeholder="Например: Иванов Иван"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="class-name">Класс</Label>
                  <Input
                    id="class-name"
                    placeholder="Например: 7А"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="school-name">Школа (необязательно)</Label>
                  <Input
                    id="school-name"
                    placeholder="Например: ГБОУ СОШ №123"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Subject Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={20} />
                  Выбор предмета
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {subjects.map((subject) => (
                    <Button
                      key={subject.id}
                      variant={selectedSubject === subject.id ? "default" : "outline"}
                      className="h-auto p-3 flex flex-col items-center gap-2"
                      onClick={() => setSelectedSubject(subject.id)}
                    >
                      <Icon name={subject.icon} size={20} />
                      <span className="text-xs text-center">{subject.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Style Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Palette" size={20} />
                  Настройки стиля
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Фон тетради</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {backgrounds.map((bg) => (
                      <Button
                        key={bg.id}
                        variant={selectedBackground === bg.id ? "default" : "outline"}
                        className="h-12 justify-start"
                        onClick={() => setSelectedBackground(bg.id)}
                      >
                        <div 
                          className="w-4 h-4 rounded mr-2 border"
                          style={{ backgroundColor: bg.color }}
                        />
                        {bg.name}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Стиль подписи</Label>
                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {styles.map((style) => (
                        <SelectItem key={style.id} value={style.id}>
                          {style.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Eye" size={20} />
                  Предварительный просмотр
                </CardTitle>
              </CardHeader>
              <CardContent>
                {label ? (
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-8 shadow-sm">
                    {/* Notebook Cover */}
                    <div 
                      className={`
                        relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg border-2 border-slate-300 p-6
                        ${selectedBackground === 'lined' ? 'bg-gradient-to-b from-white via-white to-slate-50' : ''}
                        ${selectedBackground === 'checkered' ? 'bg-white' : ''}
                        ${selectedBackground === 'classic' ? 'bg-slate-50' : ''}
                        ${selectedBackground === 'academic' ? 'bg-gradient-to-b from-slate-50 to-slate-100' : ''}
                      `}
                      style={{
                        backgroundImage: selectedBackground === 'lined' 
                          ? 'repeating-linear-gradient(transparent, transparent 22px, #e2e8f0 22px, #e2e8f0 24px)'
                          : selectedBackground === 'checkered'
                          ? 'repeating-linear-gradient(0deg, transparent, transparent 18px, #e2e8f0 18px, #e2e8f0 20px), repeating-linear-gradient(90deg, transparent, transparent 18px, #e2e8f0 18px, #e2e8f0 20px)'
                          : 'none'
                      }}
                    >
                      {/* Subject Header */}
                      <div className="text-center mb-6">
                        <div className="inline-block p-2 bg-primary/10 rounded-lg mb-2">
                          <Icon name={subjects.find(s => s.id === selectedSubject)?.icon || 'BookOpen'} size={24} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800 uppercase tracking-wider">
                          {label.subject}
                        </h3>
                      </div>

                      {/* Label Content */}
                      <div className="space-y-4 text-center">
                        <div className="border-b border-slate-300 pb-2">
                          <p className="text-sm text-slate-600 uppercase tracking-wide mb-1">Тетрадь</p>
                          <p className="text-xs text-slate-500">для работ по {label.subject.toLowerCase()}</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">ученика</p>
                            <p className="font-medium text-slate-800">{label.student}</p>
                          </div>
                          
                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">класс</p>
                            <p className="font-medium text-slate-800">{label.class}</p>
                          </div>
                          
                          {label.school && (
                            <div>
                              <p className="text-xs text-slate-500 uppercase tracking-wide">школа</p>
                              <p className="text-sm text-slate-700">{label.school}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-slate-300"></div>
                      <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-slate-300"></div>
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-slate-300"></div>
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-slate-300"></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-500">
                    <Icon name="FileText" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Заполните поля слева для создания подписи</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Export Options */}
            {label && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Download" size={20} />
                    Экспорт
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Icon name="Image" size={16} className="mr-2" />
                      Скачать как изображение
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Icon name="Printer" size={16} className="mr-2" />
                      Распечатать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;