import Extraction from "../model/extraction.model";
import Extraction from "../utils/ai.utils.js";
export const extractContent = async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({
                success:false,
                msg:"File is required.."
            })
        }
        const base64 = req.file.buffer.toString
        ("base64");
        const imageData = `data:${req.file.mimetype}
        base64,${base64}`;
      const promt = `Analyze this image and extract visible information. If it contains a resume, extract: - Name - Email - Phone - Skills - Education - Experience - Projects If it contains a LinkedIn recruitment post, extract: - Recruiter email, if visible - Recruiter or author name - Company - Job role - Required skills - Post content Return valid JSON. Use null for missing information. Do not invent or guess information.`
    const extractContentWithAi = await extractWithAi(prompt,imageData)
    let pareseData = null;
    try{
        const jsonMatch = extractContentWithAi.match(/\{[\s\S]*\}/);
        const toparse = jsonMatch ? jsonMatch[0] :extractContentWithAi;
       pareseData = JSON.parse(toparse)
    }catch(error){
console.log("Error While Parsing:",error.massage)
        pareseData = {rawContent:extractContentWithAi}

    }
    const saveExtraction = await Extraction.create
    ({
        data:pareseData,
        rawContent:extractContentWithAi,
        CreatedBy:req.user._id
    })
    return res.status(200).json({
        success: true,
        msg:"Extraction Success...",
        saveExtraction
    })

    }catch(error){
console.log("Extraction Error:",error.msg);
return res.status(500).json
({success:false,
msg: "internal server erroe "})
    }
}