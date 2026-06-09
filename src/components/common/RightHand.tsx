import { s } from "framer-motion/client";
import Image from "next/image";

interface RightHandProps {
  mounted: boolean;
  style?: React.CSSProperties;
}
export default function RightHand({ mounted, style }: RightHandProps) {

    return (
        
   
   <div
          className={mounted ? "animate-fade-up delay-200" : ""}
          style={{
            ...style,
             opacity: mounted ? 1 : 0,
             transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",  
            position: "absolute",
            width: "35%",
            maxWidth: 532,
            zIndex: 20,
            transform: "rotate(10.89deg)",
          }}
        >
          <Image
            src="/hand-right.png"
            alt="Pointing hand"
            width={532}
            height={479}
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(-101px 112px 91px rgba(0,0,0,0.1)) drop-shadow(-46px 50px 68px rgba(0,0,0,0.17))",
            }}
          />
        </div>

    );
}