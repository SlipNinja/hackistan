import { englishDataset, englishRecommendedTransformers, RegExpMatcher, TextCensor } from "obscenity"; 


// Censurer le texte si y a des insultes 


export const censorMiddleware = (req, res, next) => {
    
    const text = req.body;
    
    const censor = new TextCensor(); 
    
    const matcher = new RegExpMatcher({
    ...englishDataset.build(), 
    ...englishRecommendedTransformers, 
    });
    
 
    const match = matcher.getAllMatches(text);
    const response = (censor.applyTo(text, match));
    return req.body.text = response
    // if(match) {
    //     return res.json({message: " Le texte contient des insultes"})
    // }; 

    
    next(); 
    
};

