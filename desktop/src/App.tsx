import { useState } from "react";
import { 
  Users, 
  Calendar, 
  FileText as FileContract,
  ListTodo, 
  FileText, 
  BarChart3, 
  Settings, 
  Languages, 
  Search, 
  Save, 
  Download, 
  Plus, 
  RotateCcw, 
  Sparkles,
  Grid3x3,
  List,
  Eye,
  MessageCircle,
  BookOpen
} from "lucide-react";
import "./App.css";

interface Translator {
  id: number;
  name: string;
  initials: string;
  specialization: string;
  languages: string;
  level: string;
  rate: number;
  rating: number;
  reviews: number;
  status: 'available' | 'busy' | 'offline';
}

function App() {
  const [activeNav, setActiveNav] = useState('translators');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const [translators] = useState<Translator[]>([
    {
      id: 1,
      name: "Emma Johansson",
      initials: "EM",
      specialization: "Legal Translation Specialist",
      languages: "Arabic ↔ Swedish",
      level: "L1 Certified",
      rate: 850,
      rating: 4.8,
      reviews: 128,
      status: 'available'
    },
    {
      id: 2,
      name: "Ahmed Mansour",
      initials: "AM",
      specialization: "Medical Translation Expert",
      languages: "Arabic ↔ English",
      level: "L1 Certified",
      rate: 950,
      rating: 4.9,
      reviews: 204,
      status: 'busy'
    },
    {
      id: 3,
      name: "Lisa Bergman",
      initials: "LB",
      specialization: "Technical Translation",
      languages: "German ↔ Swedish",
      level: "L2 Senior",
      rate: 750,
      rating: 4.6,
      reviews: 87,
      status: 'available'
    },
    {
      id: 4,
      name: "Omar Ali",
      initials: "OA",
      specialization: "Business Translation",
      languages: "Arabic ↔ Swedish",
      level: "L2 Senior",
      rate: 650,
      rating: 4.5,
      reviews: 156,
      status: 'available'
    },
    {
      id: 5,
      name: "Sofia Nielsen",
      initials: "SN",
      specialization: "Academic Translation",
      languages: "English ↔ Swedish",
      level: "L1 Certified",
      rate: 800,
      rating: 4.7,
      reviews: 93,
      status: 'offline'
    }
  ]);

  const navItems = [
    { id: 'translators', icon: Users, label: 'Find Translators' },
    { id: 'bookings', icon: Calendar, label: 'My Bookings' },
    { id: 'tenders', icon: FileContract, label: 'Tender Management' },
    { id: 'projects', icon: ListTodo, label: 'Active Projects' },
    { id: 'invoices', icon: FileText, label: 'Invoices & Billing' },
    { id: 'reports', icon: BarChart3, label: 'Analytics & Reports' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const getPageTitle = (navId: string) => {
    const item = navItems.find(nav => nav.id === navId);
    return item?.label || 'Dashboard';
  };

  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const handleSearch = () => {
    console.log('Performing search with current filters...');
    // Search logic would go here
  };

  const handleClearFilters = () => {
    console.log('Clearing all filters...');
    // Clear filter logic would go here
  };

  const handleBookTranslator = (translator: Translator) => {
    console.log('Booking translator:', translator.name);
    // Booking logic would go here
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <Languages className="w-8 h-8 text-violet-600" />
            <span className="text-xl font-bold text-slate-800">Translators Pro</span>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-slate-800">John Smith</div>
            <div className="text-slate-600">Administrator</div>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                className={`w-full flex items-center gap-3 px-3 py-2 mb-1 rounded-md text-left transition-colors ${
                  activeNav === item.id 
                    ? "bg-violet-100 text-violet-700" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setActiveNav(item.id)}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">{getPageTitle(activeNav)}</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors">
              <Plus className="w-4 h-4" />
              New Request
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {activeNav === 'translators' && (
            <>
              {/* Advanced Search Panel */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-violet-600" />
                    <h2 className="text-lg font-semibold text-slate-800">Advanced Search & Filters</h2>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
                    <Save className="w-4 h-4" />
                    Save Search
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Language Pair</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500">
                      <option value="">Any Language Pair</option>
                      <option value="ar-sv">Arabic ↔ Swedish</option>
                      <option value="en-sv">English ↔ Swedish</option>
                      <option value="de-sv">German ↔ Swedish</option>
                      <option value="fr-sv">French ↔ Swedish</option>
                      <option value="es-sv">Spanish ↔ Swedish</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Specialization</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500">
                      <option value="">All Specializations</option>
                      <option value="legal">Legal</option>
                      <option value="medical">Medical</option>
                      <option value="technical">Technical</option>
                      <option value="business">Business & Finance</option>
                      <option value="academic">Academic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Certification Level</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500">
                      <option value="">Any Level</option>
                      <option value="L1">L1 - Certified/Sworn</option>
                      <option value="L2">L2 - Senior (5+ years)</option>
                      <option value="L3">L3 - Intermediate (2-5 years)</option>
                      <option value="L4">L4 - Junior (&lt;2 years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Rate Range (SEK/hour)</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500">
                      <option value="">Any Rate</option>
                      <option value="0-500">0 - 500</option>
                      <option value="500-750">500 - 750</option>
                      <option value="750-1000">750 - 1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Minimum Rating</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500">
                      <option value="">Any Rating</option>
                      <option value="4.5">4.5+ Stars</option>
                      <option value="4.0">4.0+ Stars</option>
                      <option value="3.5">3.5+ Stars</option>
                      <option value="3.0">3.0+ Stars</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-700 focus:ring-2 focus:ring-violet-500 focus:border-violet-500" 
                      placeholder="City or Region" 
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button 
                    className="flex items-center gap-2 px-6 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors"
                    onClick={handleSearch}
                  >
                    <Search className="w-4 h-4" />
                    Search Translators
                  </button>
                  <button 
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 transition-colors"
                    onClick={handleClearFilters}
                  >
                    <RotateCcw className="w-4 h-4" />
                    Clear Filters
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
                    <Sparkles className="w-4 h-4" />
                    AI Suggestions
                  </button>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Search Results</h2>
                    <p className="text-sm text-slate-600">{translators.length} translators found</p>
                  </div>
                  <div className="flex items-center border border-slate-300 rounded-md">
                    <button 
                      className={`p-2 ${viewMode === 'grid' ? 'bg-violet-100 text-violet-700' : 'text-slate-600 hover:bg-slate-100'} rounded-l-md transition-colors`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3x3 className="w-4 h-4" />
                    </button>
                    <button 
                      className={`p-2 ${viewMode === 'table' ? 'bg-violet-100 text-violet-700' : 'text-slate-600 hover:bg-slate-100'} rounded-r-md transition-colors`}
                      onClick={() => setViewMode('table')}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Grid View */}
                {viewMode === 'grid' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {translators.map((translator) => (
                      <div key={translator.id} className="border border-slate-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center font-semibold">
                              {translator.initials}
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-800">{translator.name}</h3>
                              <p className="text-sm text-slate-600">{translator.specialization}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            translator.status === 'available' ? 'bg-green-100 text-green-700' :
                            translator.status === 'busy' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {formatStatus(translator.status)}
                          </span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Languages:</span>
                            <span className="text-slate-800">{translator.languages}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Level:</span>
                            <span className="text-slate-800">{translator.level}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Rate:</span>
                            <span className="text-slate-800">{translator.rate} SEK/hour</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Rating:</span>
                            <span className="text-slate-800">★ {translator.rating} ({translator.reviews} reviews)</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-violet-600 text-white rounded text-sm hover:bg-violet-700 transition-colors">
                            <Eye className="w-3 h-3" />
                            View
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 border border-slate-300 rounded text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                            <MessageCircle className="w-3 h-3" />
                            Message
                          </button>
                          <button 
                            className="flex items-center gap-1 px-3 py-1.5 border border-slate-300 rounded text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={translator.status !== 'available'}
                            onClick={() => handleBookTranslator(translator)}
                          >
                            <BookOpen className="w-3 h-3" />
                            Book
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Table View */}
                {viewMode === 'table' && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-medium text-slate-700">Name</th>
                          <th className="text-left py-3 px-4 font-medium text-slate-700">Languages</th>
                          <th className="text-left py-3 px-4 font-medium text-slate-700">Specialization</th>
                          <th className="text-left py-3 px-4 font-medium text-slate-700">Level</th>
                          <th className="text-left py-3 px-4 font-medium text-slate-700">Rate</th>
                          <th className="text-left py-3 px-4 font-medium text-slate-700">Rating</th>
                          <th className="text-left py-3 px-4 font-medium text-slate-700">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-slate-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {translators.map((translator) => (
                          <tr key={translator.id} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center text-xs font-semibold">
                                  {translator.initials}
                                </div>
                                <div>
                                  <div className="font-medium text-slate-800">{translator.name}</div>
                                  <div className="text-xs text-slate-600">
                                    {translator.specialization}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-slate-700">{translator.languages}</td>
                            <td className="py-4 px-4 text-slate-700">{translator.specialization.replace(' Translation', '').replace(' Specialist', '').replace(' Expert', '')}</td>
                            <td className="py-4 px-4 text-slate-700">{translator.level}</td>
                            <td className="py-4 px-4 text-slate-700">{translator.rate} SEK/h</td>
                            <td className="py-4 px-4 text-slate-700">★ {translator.rating} ({translator.reviews})</td>
                            <td className="py-4 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                translator.status === 'available' ? 'bg-green-100 text-green-700' :
                                translator.status === 'busy' ? 'bg-orange-100 text-orange-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {formatStatus(translator.status)}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-3 py-1.5 bg-violet-600 text-white rounded text-sm hover:bg-violet-700 transition-colors">
                                  <Eye className="w-3 h-3" />
                                  View
                                </button>
                                <button 
                                  className="flex items-center gap-1 px-3 py-1.5 border border-slate-300 rounded text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                  disabled={translator.status !== 'available'}
                                  onClick={() => handleBookTranslator(translator)}
                                >
                                  <BookOpen className="w-3 h-3" />
                                  Book
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Placeholder content for other nav items */}
          {activeNav !== 'translators' && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center bg-white border border-slate-200 rounded-lg p-8 max-w-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-2">{getPageTitle(activeNav)}</h2>
                <p className="text-slate-600">This section is under development. Content for {getPageTitle(activeNav)} will be available soon.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;