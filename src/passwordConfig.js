createHash=(password)=>{
const salt=10

const hashPassword=bycrypt.hashsync(password,salt)
return createHash
}
export default createHash;