
export default {
  state: {
    assort:"purpose",
    dep:null,
    team:null,
    team1:null
   
  },
  getters:{
    getAssort: state=>{
      return state.assort
    },
    getDep: state=>{
      return state.dep
    },
    getTeam: state=>{
      return state.team
    },
    getTeam1: state=>{
      return state.team1
    },

  },
  mutations: {
    setAssort:(state,value)=>{
      state.assort = value
    },
    setDep:(state,value)=>{
      state.dep = value
    },
    setTeam:(state,value)=>{
      state.team = value
    },
    setTeam1:(state,value)=>{
      state.team1 = value
    },
 

  },
  actions: {

  }
}
