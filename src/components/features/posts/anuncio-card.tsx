import Link from "next/link";

import styles from "./anuncios.module.scss";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";

interface AnuncioCardProps {
  id: string;
  title: string;
  description: string;
  phone: string;
}

const AnuncioCard = ({ id, title, description, phone }: AnuncioCardProps) => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{description}</p>
        <p className={styles.cardPhone}>📞 987 654 321</p>
        <Button variant="outline" size="sm">
          <Link href={`/anuncio/${id}`}>Ver más</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AnuncioCard;
