# SITE WEB APIOS BONE
### Bienvenue sur le repo git du siteweb [apios-bone.com](https://apios-bone.com)

## Ajouter une news
Les news se trouvent dans le répertoire [src/content/news](src/content/news) et sont au format `markdown`.

Pour ajouter une news rien de plus simple ! Il suffit de copier/coller un des fichiers, le renommer et changer son contenu. Les news sont triées par date de la plus récente à la plus ancienne.  

Il faut aussi ajouter l'image associée dans le répertoire [public/news/images](public/news/images). Le mieux est de mettre une image qui ne soit pas trop volumineuse (pas plus de 200ko) et idéalement au format 16:9 (sinon elle sera en partie rognée).  

Une fois la news et l'image ajoutée il faut `commit` les changements puis `push` le code sur github, le site sera automatiquement déployé. Pour cela, il faut ouvrir le terminal et taper les commandes suivantes :
```bash
git add .
git commit -m "adding fresh news"
git push
```

Et voilà, rendez-vous sur [apios-bone.com](https://apios-bone.com) pour voir la mise à jour !