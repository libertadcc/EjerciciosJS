const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

const capitalizeTopics = topics.map(eachTopic => eachTopic.toUpperCase());

capitalizeTopics.reverse();
console.log('topics', topics);
console.log('capitalizeTopics', capitalizeTopics);

const last = topics
    .map(function(temita) {
        return temita.toUpperCase()
    })
    .reverse();

console.log('last', last);