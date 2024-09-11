# Comptabilité générale

<br>

<br>

<br>

## Terminologie

```mermaid
graph TD
    A[nature des comptes] --> B[actif]
    A --> C[passif]
    A --> D[charge]
    A --> E[produit]
```

<br>

<br>

<br>


## Comptes de bilan et comptes de gestion

```mermaid
graph TD
    A[l'opération affecte le patrimoine de l'entreprise] -->|oui| B[comptes de bilan]
    B --> B1[comptes de la classe <br> 1 à classe 5]
    B1 --> B11[comptes d'actif]
    B1 --> B12[comptes de passif]
    A -->|non| C[comptes de gestion]
    C --> C1[comptes de la classe <br> 6 et 7]
    C1 --> C11[comptes de charges]
    C1 --> C12[comptes de produits]
    C11 -->|alimente en fin ...| C2[compte de résultat]
    C12 -->|... d'exercice le| C2
```
<br>

<br>

<br>


## Résumer les comptes en fin d'exercice

```mermaid
graph TD
    A[à la fin de l'exercice] --> B[comptes de bilan]
    B --> B11[comptes d'actif]
    B --> B12[comptes de passif]
    B11 --> B2[Bilan final]
    B12 --> B2
    A --> C[comptes de gestion]
    C --> C11[comptes de charges]
    C --> C12[comptes de produits]
    C11 --> C2[compte de résultat]
    C12 --> C2
    C2 --> C3[Compte de Profits et Pertes]
```

![PCG_A](../images/PCG_A.png)*Plan comptable normalisé luxembourgeois (Comptes de bilan)*
![PCG_B](../images/PCG_B.png)*Plan comptable normalisé luxembourgeois (Comptes de gestion)*

<br>

<br>

<br>


## 4. Les comptes de charges et de produits

<br>

<br>

<br>


### 4.1. Charges et produit

```mermaid
graph TD
    A[étudier la fortune d'une entreprise] -->|requiert l'étude des| B[comptes de gestion]
    B --> C1[enrichissement <br> de l'entreprise]
    C1 -->|est enregistré dans|C11[comptes de produit]
    B -->  C2[appauvrissement <br> de l'entreprise]
    C2 -->|est enregistré dans|C21[comptes de charges]
```
<br>

<br>

<br>


### 4.2. Bénéfice et perte de l'exercice 

```mermaid
graph TD
    A[chaque année l'entreprise  les comptes de gestion] -->|récapitule les| B[comptes de gestion]
    B --> C1[si charges < produits]
    C1 -->|alors l'entreprise a fait un|C11[profit]
    C11 --> C111[bénéfice de l'exercice]
    B -->  C2[si charges > produits]
    C2 -->|alors l'entreprise a fait une|C21[perte]
    C21 --> C211[perte de l'exercice] 
```
<br>

<br>

<br>


### 4.3. Compte de profits & pertes 

```mermaid
flowchart LR
A[compte de <br> profits et pertes] --> B[1. Chiffre d'affaires net] --> B1[70...]
A --> C[4. Autres produits d'exploitation] --> C1[74...]
A --> D[5a. Matières premières et consommables] --> D1[60...]
A --> E[5b. Autres charges externes] --> E1[61...]
A --> F[6. Frais de personnel] --> F1[62...]
A --> G[8. Autres charges d'exploitation] --> G1[64...]
A --> H[11. Intérêts et autres produits financiers] --> H1[75...]
A --> I[14. Intérêts et autres charges financières] --> I1[65...]
A --> J[Impôts sur le résultat] --> J1[67...]
style B1 fill:#66B2FF
style C1 fill:#66B2FF
style D1 fill:#FF3333
style E1 fill:#FF3333
style F1 fill:#FF3333
style G1 fill:#FF3333
style H1 fill:#66B2FF
style I1 fill:#FF3333
style J1 fill:#FF3333
```

<br>

<br>

<br>


## 5. Le Journal

```mermaid
graph TD
    A[documents comptables] --> B[Bilan]
    B -->|résume|B1[situation patrimoniale <br> d'une entreprise <br> à une date donnée]
    A --> C[Grand-Livre] 
    C -->|permet de suivre| C1[évolution de l'entreprise <br> à l'aide de comptes]
    A--> D[Profits et pertes]
    D -->|récapitule| D1[ensemble <br> des charges et <br> produits de l'exercice]
    A --> E[Journal]
    E -->|permet| E1[enregistrement chronologique <br> des opérations]
    A --> F[Balance de vérification]
    F -->|reprend| F1[les montants totaux <br> des débits et crédits <br> ainsi que les <br> soldes éventuels <br> à une date donnée]
    style E fill:#FF9999
```

<br>

<br>

<br>


## 7. La TVA

```mermaid
graph TD
    A[Simplification: échanges commerciaux <br> uniquement sur territoire <br> luxembourgeois] -->|impôt sur consommation| B[Taxe sur la valeur ajoutée <br> TVA ]
    B --> |concerne les| C[biens et services <br> consommés au Luxembourg]
```

<br>

<br>

<br>

Perspective de l'entreprise ...

```mermaid
graph TD
    A[FOURNISSEUR] -->|vend à l'| B[ENTREPRISE <br> achète en payant la TVA en amont <br> qui est déductible]
    B --> |vend au| C[CLIENT <br>  achète en payant la TVA en aval <br> qui est non-déductible]
    style B fill:#FF9999
```

<br>

<br>

<br>

Les taux de TVA au Luxembourg ...

```mermaid
graph TD
    A[Taux de TVA] --> B1[Taux normal <br> 17%]
    B1 --> B11[s'applique par défaut]
    A --> B2[Taux intermédiaire <br> 14%]
    B2 --> B21[Fuel, alcool, <br> gestion des titres, ...]
    A --> B3[Taux réduit <br> 8%]
    B3 --> B31[électricité, gaz, <br> coiffage, ...]
    A --> B4[Taux super-réduit <br> 3%]
    B4 --> B41[alimentation, restauration, <br> livres, vêtements, ...]
    style A fill:#C0C0C0
```


<br>

<br>

<br>

Calcul de la TVA ...

$HTVA + TVA = TTC$

$2.000 + 2.000 \cdot 0,17 = 2.340$ 





<br>

<br>

<br>

Comptabilisation de la TVA ...


```mermaid
graph TD
    A[TVA EN AMONT <br> <br> créance envers l'Etat <br> compte d'Actif <br> 421611 TVA en amont] --> B[ENTREPRISE]
    B -->  C[TVA EN AVAL <br> <br> dette envers l'Etat <br> compte de Passif <br> 461411 TVA en aval]
    style B fill:#FF9999
```


<br>

<br>

<br>

Formules de base ....

$HTVA + TVA = TTC$

$TTC = HTVA \times 1.17$
si la TVA est de 17%

$HTVA = TTC \div 1.17$
si la TVA est de 17%


<br>

<br>

<br>


```mermaid
graph TD
    A[Facture] --> A1[facture ordinaire]
    A --> A2[facture d'avoir <br> ou note de crédit]
    A1 --> |établi par <br> le vendeur le|B12[détail]
    B12 --> C11[produits <br> livrés]
    B12 --> C12[services <br> prestés]
    B12 --> C13[prix <br> à payer]
    A1 --> |constitue une|B1[pièce justificatif]
    B1 --> |en|D11[fiscalité]
    B1 --> |en|D12[comptabilité]
    A1 --> |doit être|B2[classer et archiver pendant 10 ans]
    A2 --> A21[rectifie <br> la facture <br> initiale]
```


<br>

<br>

<br>



## 8. Les réductions de prix


```mermaid
graph TD
    A[2 catégories de réductions de prix] --> A1[réductions commerciales]
    A --> A2[réductions financières]
    A1 --> A11[rabais]
    A11 --> A111[défaut de qualité <br> ou de conformité] 
    A1 --> A12[remise]
    A12 --> A121[importance <br> de l'achat]
    A12 --> A122[personnalité <br> du client]
    A1 --> A13[ristourne]
    A13 -->|calculée sur| A131[ensemble des opérations faites <br> pendant une période déterminée]
    A2 --> A21[escompte]
    A21 --> |en cas de| A212[paiement à une <br> date antérieur]

```


<br>

<br>

<br>


### Schéma de calcul


<br>

<br>

<br>

```mermaid
graph TD
    A[Montant brut HTVA] --> A1[- RRR]
    A1 --> A2[= Net commercial]
    A2 --> A3[- Escompte]
    A3 --> A4[= Net financier]
    A4 --> A5[+ TVA]
    A5 --> A6[= Montant à payer TTC]
    style A1 fill:#ADD8E6
    style A3 fill:#7FFFD4
```

<br>

<br>

<br>

### Comptabilisation des réductions

```mermaid
graph TD
    A[Comptabiliser les réductions] --> RC[réductions <br> commerciales]
    A --> RF[réductions <br> financières]
    RC --> RC1[RRR figurant sur <br> une facture ordinaire]
    RC --> RC2[RRR figurant sur une facture d'avoir]
    RC2 --> |qui bénéficie <br> du RRR| RC21[609 RRR obtenus et <br> non directement déduits <br> des achats]
    RC2 --> |qui accorde <br> un RRR| RC22[709 RRR accordés et <br> non directement déduits <br> des ventes]
    RC1 --> |enregistrer le| RC11[net commercial dans <br> les comptes d'achats <br> ou de ventes]
    RC21 --- RC23[comptes soustractifs]
    RC22 --- RC23[comptes soustractifs]
    RF --> |qui bénéficie <br> d'un escompte| RF1[75562 Escomptes obtenus]
    RF --> |qui accorde <br> l'escompte| RF2[65562 Escomptes accordés]
```


[La facturation et les réductions de prix (fiche de résumé)](../pdf/facturation-et-reductions-de-prix.pdf)