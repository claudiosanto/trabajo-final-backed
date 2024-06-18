createHash=(password)=>{
const salt=10

const hashPassword=bycrypt.hashsync(password,salt)
  return hashPassword
}
export default createHash;