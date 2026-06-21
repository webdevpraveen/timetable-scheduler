export interface SubjectEntry {
  code: string;
  name: string;
  stream: string;
  credits: number;
  semester: number;
  type: 'THEORY' | 'LAB' | 'SEMINAR' | 'ELECTIVE';
  hoursPerWeek: number; // expected contact hours
  preferredSlots?: string[]; // e.g. ['MON-1','WED-3']
  group?: string; // to group labs or multi-part sessions
}

export const SUBJECTS: SubjectEntry[] = [
  // --- BCA ---
  { code: 'BCA101', name: 'Programming in C', stream: 'BCA', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BCA102', name: 'Web Designing', stream: 'BCA', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BCA103', name: 'C Programming Lab', stream: 'BCA', credits: 2, semester: 1, type: 'LAB', hoursPerWeek: 2, group: 'CLAB' },
  { code: 'BCA301', name: 'Data Structures using C++', stream: 'BCA', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BCA302', name: 'Database Management Systems', stream: 'BCA', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BCA303', name: 'DBMS Lab', stream: 'BCA', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'DBLAB' },
  { code: 'BCA501', name: 'Java Programming', stream: 'BCA', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BCA502', name: 'Computer Networks', stream: 'BCA', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BCA503', name: 'Java Lab', stream: 'BCA', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'JAVALAB' },
  
  // --- Btech ---
  { code: 'BT101', name: 'Engineering Mathematics I', stream: 'Btech', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BT102', name: 'Engineering Physics', stream: 'Btech', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BT103', name: 'Physics Lab', stream: 'Btech', credits: 2, semester: 1, type: 'LAB', hoursPerWeek: 2, group: 'PHYLAB' },
  { code: 'BT301', name: 'Digital Logic Design', stream: 'Btech', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BT302', name: 'Object Oriented Programming', stream: 'Btech', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BT303', name: 'OOP Lab', stream: 'Btech', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'OOPLAB' },
  { code: 'BT501', name: 'Operating Systems', stream: 'Btech', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BT502', name: 'Design and Analysis of Algorithms', stream: 'Btech', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BT503', name: 'OS Lab', stream: 'Btech', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'OSLAB2' },

  // --- BBA ---
  { code: 'BBA101', name: 'Principles of Management', stream: 'BBA', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BBA102', name: 'Business Accounting', stream: 'BBA', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BBA301', name: 'Organizational Behavior', stream: 'BBA', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BBA302', name: 'Marketing Management', stream: 'BBA', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BBA303', name: 'Business Communication Lab', stream: 'BBA', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'COMLAB' },
  { code: 'BBA501', name: 'Financial Management', stream: 'BBA', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BBA502', name: 'Human Resource Management', stream: 'BBA', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BBA503', name: 'Entrepreneurship Seminar', stream: 'BBA', credits: 2, semester: 5, type: 'SEMINAR', hoursPerWeek: 2 },

  // --- LLB ---
  { code: 'LLB101', name: 'Constitutional Law I', stream: 'LLB', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'LLB102', name: 'Law of Contract', stream: 'LLB', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'LLB301', name: 'Family Law', stream: 'LLB', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'LLB302', name: 'Law of Crimes', stream: 'LLB', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'LLB303', name: 'Moot Court Exercise', stream: 'LLB', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'MOOT' },
  { code: 'LLB501', name: 'Company Law', stream: 'LLB', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'LLB502', name: 'Environmental Law', stream: 'LLB', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'LLB503', name: 'Legal Drafting Seminar', stream: 'LLB', credits: 2, semester: 5, type: 'SEMINAR', hoursPerWeek: 2 },

  // --- Mtech ---
  { code: 'MT101', name: 'Advanced Data Structures', stream: 'Mtech', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MT102', name: 'High Performance Computing', stream: 'Mtech', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MT103', name: 'Advanced Computing Lab', stream: 'Mtech', credits: 2, semester: 1, type: 'LAB', hoursPerWeek: 2, group: 'ADCLAB' },
  { code: 'MT301', name: 'Machine Learning & AI', stream: 'Mtech', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MT302', name: 'Cloud Architecture', stream: 'Mtech', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MT303', name: 'Research Methodology Seminar', stream: 'Mtech', credits: 2, semester: 3, type: 'SEMINAR', hoursPerWeek: 2 },

  // --- MCA ---
  { code: 'MCA101', name: 'Software Engineering', stream: 'MCA', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MCA102', name: 'Python Programming', stream: 'MCA', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MCA103', name: 'Python Lab', stream: 'MCA', credits: 2, semester: 1, type: 'LAB', hoursPerWeek: 2, group: 'PYLAB' },
  { code: 'MCA301', name: 'Artificial Intelligence', stream: 'MCA', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MCA302', name: 'Full Stack Development', stream: 'MCA', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MCA303', name: 'Full Stack Lab', stream: 'MCA', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'FSDLAB' },
  { code: 'MCA501', name: 'Blockchain Technology', stream: 'MCA', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MCA502', name: 'Data Science & Analytics', stream: 'MCA', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MCA503', name: 'Data Science Lab', stream: 'MCA', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'DSLAB' },

  // --- MBA ---
  { code: 'MBA101', name: 'Managerial Economics', stream: 'MBA', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MBA102', name: 'Quantitative Methods', stream: 'MBA', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MBA301', name: 'Strategic Management', stream: 'MBA', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MBA302', name: 'International Business', stream: 'MBA', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MBA303', name: 'Case Study Seminar', stream: 'MBA', credits: 2, semester: 3, type: 'SEMINAR', hoursPerWeek: 2 },
  { code: 'MBA501', name: 'Digital Marketing Strategies', stream: 'MBA', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'MBA502', name: 'Corporate Governance', stream: 'MBA', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },

  // --- BPT (Physiotherapy) ---
  { code: 'BPT101', name: 'Human Anatomy', stream: 'BPT', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BPT102', name: 'Human Physiology', stream: 'BPT', credits: 4, semester: 1, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BPT103', name: 'Anatomy Lab', stream: 'BPT', credits: 2, semester: 1, type: 'LAB', hoursPerWeek: 2, group: 'ANALAB' },
  { code: 'BPT301', name: 'Biomechanics', stream: 'BPT', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BPT302', name: 'Exercise Therapy', stream: 'BPT', credits: 4, semester: 3, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BPT303', name: 'Exercise Therapy Lab', stream: 'BPT', credits: 2, semester: 3, type: 'LAB', hoursPerWeek: 2, group: 'EXTLAB' },
  { code: 'BPT501', name: 'Orthopedics', stream: 'BPT', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BPT502', name: 'Neurology', stream: 'BPT', credits: 4, semester: 5, type: 'THEORY', hoursPerWeek: 4 },
  { code: 'BPT503', name: 'Clinical Assessment Lab', stream: 'BPT', credits: 2, semester: 5, type: 'LAB', hoursPerWeek: 2, group: 'CLINIC' },

  // -- Pad with Electives to ensure a good spread
  ...Array.from({length: 40}).map((_,i)=> ({
    code: 'ELE' + (800+i),
    name: 'Special Elective ' + (i+1),
    stream: ['BCA','Btech','BBA','LLB','Mtech','MCA','MBA','BPT'][i%8],
    credits: 3,
    semester: 5,
    type: 'ELECTIVE' as const,
    hoursPerWeek: 3
  }))
];

export interface SlotCell { slotId: string; subjectCode?: string; }
export interface TimetableResult { grid: Record<string, SlotCell>; warnings: string[]; }

export const DAYS = ['MON','TUE','WED','THU','FRI'];
export const PERIODS = ['1','2','3','4','5','6','7'];
// Human-readable time ranges for each period (approximate institutional slots)
export const PERIOD_TIME_RANGES: Record<string,string> = {
  '1':'09:00-10:00','2':'10:00-11:00','3':'11:00-12:00','4':'12:00-13:00','5':'14:00-15:00','6':'15:00-16:00','7':'16:00-17:00'
};
export const buildAllSlots = () => DAYS.flatMap(d=> PERIODS.map(p=> `${d}-${p}`));

export interface GenerateOptions {
  semester?: number; // retained for backward compatibility
  subjectCodes?: string[]; // explicit subject codes to schedule
  maxDailyTheory?: number; // limit of major theory classes per day
}

function shuffle<T>(arr:T[], seed= Date.now()):T[] { const a=[...arr]; let r=seed; for(let i=a.length-1;i>0;i--){ r=(r*1664525+1013904223)>>>0; const j=r%(i+1); [a[i],a[j]]=[a[j],a[i]];} return a; }

export function generateTimetable(opts: GenerateOptions): TimetableResult {
  const warnings: string[] = [];
  const slots = buildAllSlots();
  const grid: Record<string, SlotCell> = Object.fromEntries(slots.map(s=> [s,{slotId:s}]));

  let subjects: SubjectEntry[] = [];
  if(opts.subjectCodes && opts.subjectCodes.length){
    subjects = SUBJECTS.filter(s=> opts.subjectCodes!.includes(s.code));
  } else if(typeof opts.semester === 'number') {
    subjects = SUBJECTS.filter(s=> s.semester===opts.semester);
  } else {
    subjects = SUBJECTS.slice(0,12); // fallback: first 12 subjects
  }
  if(subjects.length===0) return { grid, warnings: ['No subjects to schedule'] };

  // Separate labs (place later) and theory
  const labs = subjects.filter(s=> s.type==='LAB');
  const theory = subjects.filter(s=> s.type!=='LAB');

  // Strategy: place theory first, then labs requiring contiguous blocks (2 periods)
  let placedTheory = 0;
  const allTheorySlots = shuffle(slots.filter(s=> parseInt(s.split('-')[1],10) <=5));

  for(const subj of theory){
    let needed = subj.hoursPerWeek;
    for(const slot of allTheorySlots){
      if(needed<=0) break;
      if(grid[slot].subjectCode) continue;
      // simple daily theory cap
      if(opts.maxDailyTheory){
        const [day] = slot.split('-');
        const dayCount = PERIODS.filter(p=> grid[`${day}-${p}`].subjectCode && theory.some(t=> t.code===grid[`${day}-${p}`].subjectCode)).length;
        if(dayCount >= opts.maxDailyTheory) continue;
      }
      grid[slot].subjectCode = subj.code;
      needed--; placedTheory++;
    }
    if(needed>0) warnings.push(`Insufficient slots for ${subj.code}`);
  }

  // Place labs: need 2 contiguous free periods same day
  const labSlots = slots.filter(s=> ['1','2','3','4','5'].includes(s.split('-')[1]));
  for(const lab of labs){
    let placed=false;
    outer: for(const day of DAYS){
      for(let p=1;p<=5;p++){
        const a=`${day}-${p}`; const b=`${day}-${p+1}`;
        if(!grid[a].subjectCode && !grid[b].subjectCode){
          grid[a].subjectCode = lab.code;
          grid[b].subjectCode = lab.code;
          placed=true; break outer;
        }
      }
    }
    if(!placed) warnings.push(`Could not place lab ${lab.code}`);
  }

  return { grid, warnings };
}
